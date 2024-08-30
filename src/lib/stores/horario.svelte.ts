import { parseHorario, getColor } from '$lib/utils/utils';
import { storeAsignaturas } from './asignaturas.svelte.js';
import type { Asignatura, Grupo, Horario } from '$lib/types';

interface Reference {
	facultad: string;
	carrera: string;
	codigo: string;
}

interface SeleccionItemType {
	ref: Reference;
	groupValue: string;
	materia: Asignatura | null | undefined;
	grupo: Grupo | null | undefined;
	horarios: Horario[] | null | undefined;
	color: string;
}

class SeleccionItem implements SeleccionItemType {
	ref: Reference = $state({ facultad: '', carrera: '', codigo: '' });
	groupValue: string = $state('');

	materia: Asignatura | null | undefined = $derived(
		this.ref
			? storeAsignaturas.data[this.ref.facultad][this.ref.carrera].asignaturas.find(
					(materia) => materia.codigo === this.ref.codigo
				)
			: null
	);

	grupo: Grupo | null | undefined = $derived(
		this.groupValue && this.materia
			? this.materia.grupos.find((grupo) => grupo.grupo === this.groupValue)
			: null
	);

	horarios = $state(null);
	color = $state(getColor());

	constructor(refMateria: Reference) {
		this.ref = refMateria;
	}
}

interface Seleccion {
	[key: string]: SeleccionItem;
}

class StoreHorario {
	seleccion: Seleccion = $state({});
	horario = $state(
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

	constructor() {}

	saveToStorage() {
		const data = Object.values(this.seleccion).map((seleccion) => ({
			materia: seleccion.materia,
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
	agregarAsignatura(materia: Asignatura) {
		this.seleccion[materia.codigo] = new SeleccionItem(materia);
		this.saveToStorage();
	}

	eliminarAsignatura(materia: Asignatura) {
		this.limpiarHorario(materia);
		delete this.seleccion[materia.codigo];
		this.saveToStorage();
	}

	limpiarHorario(materia: Asignatura) {
		const horarioAnterior: Horario[] | null = this.seleccion[materia.codigo].horarios;
		if (horarioAnterior) {
			for (const h of horarioAnterior) {
				const { dia, inicio, fin } = parseHorario(h);

				for (let time = inicio; time < fin; time++) {
					this.horario[time.toString()][dia.toString()] = null;
				}
			}
		}
	}

	asignarHorario(materia: Asignatura, groupValue: string) {
		this.seleccion[materia.codigo].groupValue = groupValue;
		this.saveToStorage();

		// Si no hay un grupo o se deselecciono, limpiar horario
		if (!groupValue) {
			storeHorario.limpiarHorario(materia);
			this.seleccion[materia.codigo].horarios = null;
			return;
		}

		this.limpiarHorario(materia);

		const horarios = this.seleccion[materia.codigo]?.grupo?.horarios;
		this.seleccion[materia.codigo].horarios = horarios;

		for (const h of horarios) {
			const { dia, inicio, fin } = parseHorario(h);

			for (let time = inicio; time < fin; time++) {
				this.horario[time.toString()][dia.toString()] = materia.codigo;
			}
		}
	}

	verificarHorario(codigo: string, horarios: Horario[]) {
		for (const h of horarios) {
			const { dia, inicio, fin } = parseHorario(h);

			for (let time = inicio; time < fin; time++) {
				const campoHorario = this.horario[time.toString()][dia.toString()];
				if (campoHorario !== null && campoHorario !== codigo) {
					return this.seleccion[campoHorario].materia;
				}
			}
		}
		return true;
	}
}

export const storeHorario = new StoreHorario();
