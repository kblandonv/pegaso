import { parseHorario, getColor } from '$lib/utils/utils';
import { storeAsignaturas } from './asignaturas.svelte.js';
import type { Asignatura, Grupo, Horario } from '$lib/types';

export interface SeleccionItemInterface {
	referencia: {
		facultad: string;
		carrera: string;
		codigo: string;
	};
	groupValue: string;
	grupo: Grupo;
	asignatura: Asignatura;
	horarios: Horario[];
	color: string;
}

class SeleccionItem implements SeleccionItemInterface {
	referencia: {
		facultad: string;
		carrera: string;
		codigo: string;
	} = $state({ facultad: '', carrera: '', codigo: '' });
	groupValue: string = $state('');
	grupo: Grupo = $derived.by(() => {
		if (this.groupValue && this.asignatura) {
			return (
				this.asignatura.grupos.find((grupo) => grupo.grupo === this.groupValue) || ({} as Grupo)
			);
		}

		return {} as Grupo;
	});
	asignatura: Asignatura = $derived.by(() => {
		if (this.referencia.facultad === '') {
			return {} as Asignatura;
		}

		return (
			storeAsignaturas.data[this.referencia.facultad][this.referencia.carrera].asignaturas.find(
				({ codigo }) => codigo === this.referencia.codigo
			) || ({} as Asignatura)
		);
	});
	horarios: Horario[] = $state([] as Horario[]);
	color: string = $state(getColor());

	constructor(asignatura: Asignatura) {
		this.referencia.carrera = asignatura.carrera;
		this.referencia.facultad = asignatura.facultad;
		this.referencia.codigo = asignatura.codigo;
	}
}

class StoreHorario {
	seleccion: Record<string, SeleccionItem> = $state({});
	horario: Record<string, Record<string, string | null>> = $state(
		Object.fromEntries(
			['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'].map(
				(dia) => {
					return [
						dia,
						Object.fromEntries(
							['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'].map(
								(h) => [h, null]
							)
						)
					];
				}
			)
		)
	);

	saveToStorage() {
		const data = Object.values(this.seleccion).map((seleccion) => ({
			materia: seleccion.asignatura,
			groupValue: seleccion.groupValue
		}));
		localStorage.setItem('localHorario', JSON.stringify(data));
	}

	loadFromStorage() {
		const storedData = localStorage.getItem('localHorario');

		if (!storedData) return false;

		const seleccionHorario = JSON.parse(storedData);
		for (const seleccion of seleccionHorario) {
			this.agregarAsignatura(seleccion.materia);
			this.asignarHorario(seleccion.materia, seleccion.groupValue);
		}
	}

	/* Metodos asignaturas seleccionadas */
	agregarAsignatura(asignatura: Asignatura) {
		this.seleccion[asignatura.codigo] = new SeleccionItem(asignatura);
		this.saveToStorage();
	}

	eliminarAsignatura(asignatura: Asignatura) {
		this.limpiarHorario(asignatura);
		delete this.seleccion[asignatura.codigo];
		this.saveToStorage();
	}

	limpiarHorario(asignatura: Asignatura) {
		const horarioAnterior: Horario[] = this.seleccion[asignatura.codigo].horarios;
		if (horarioAnterior) {
			for (const h of horarioAnterior) {
				const { dia, inicio, fin } = parseHorario(h);

				for (let time = inicio; time < fin; time++) {
					this.horario[time.toString()][dia.toString()] = null;
				}
			}
		}
	}

	asignarHorario(asignatura: Asignatura, groupValue: string) {
		this.seleccion[asignatura.codigo].groupValue = groupValue;
		this.saveToStorage();
		this.limpiarHorario(asignatura);

		// Si no hay un grupo o se deselecciono, limpiar horario
		if (!groupValue) {
			this.seleccion[asignatura.codigo].horarios = [];
			return;
		}

		const horariosGrupo = this.seleccion[asignatura.codigo]?.grupo?.horarios;
		this.seleccion[asignatura.codigo].horarios = horariosGrupo;

		for (const h of horariosGrupo) {
			const { dia, inicio, fin } = parseHorario(h);

			for (let time = inicio; time < fin; time++) {
				this.horario[time.toString()][dia.toString()] = asignatura.codigo;
			}
		}
	}

	verificarHorario(codigo: string, horarios: Horario[]) {
		for (const h of horarios) {
			const { dia, inicio, fin } = parseHorario(h);

			for (let time = inicio; time < fin; time++) {
				const campoHorario = this.horario[time.toString()][dia.toString()];
				if (campoHorario !== null && campoHorario !== codigo) {
					return this.seleccion[campoHorario].asignatura;
				}
			}
		}
		return true;
	}
}

export const storeHorario = new StoreHorario();
