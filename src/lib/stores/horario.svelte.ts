import { parseHorario, getColor } from '$lib/utils/utils';
import type { Asignatura, Grupo, Horario } from '$lib/types';
import { storeAsignaturas } from '$stores/asignaturas.svelte';
import { browser } from '$app/environment';
import { toastController } from '$src/lib/controllers/toastController.svelte';
import { changeStreamController } from './changeStreamController';

const LOCALSTORAGE_KEY = 'localHorario';

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
		if (this.groupValue && Object.keys(this.asignatura).length > 0) {
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

	hasValidStorage(): boolean {
		const storedData = localStorage.getItem(LOCALSTORAGE_KEY);

		if (!storedData) return false;
		const seleccionHorario: { asignatura: Asignatura; groupValue: string }[] =
			JSON.parse(storedData);

		if (seleccionHorario.length === 0) {
			return false;
		}

		for (const seleccion of seleccionHorario) {
			if (!('asignatura' in seleccion) || !('groupValue' in seleccion)) {
				return false;
			}
		}

		return true;
	}

	saveToStorage() {
		const data = Object.values(this.seleccion).map((seleccion) => ({
			asignatura: seleccion.asignatura,
			groupValue: seleccion.groupValue
		}));
		localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
	}

	async loadFromStorage() {
		const storedData = localStorage.getItem(LOCALSTORAGE_KEY);

		if (!storedData) return false;

		const seleccionHorario: { asignatura: Asignatura; groupValue: string }[] =
			JSON.parse(storedData);

		const carreras: string[] = [
			...new Set(seleccionHorario.map(({ asignatura }) => asignatura.carrera))
		];
		await Promise.all(
			carreras.map(async (carrera) => {
				return await storeAsignaturas.loadAsignaturasCarrera(carrera);
			})
		);

		for (const seleccion of seleccionHorario) {
			this.agregarAsignatura(seleccion.asignatura);
			this.asignarHorario(seleccion.asignatura, seleccion.groupValue);
		}

		this.saveToStorage();
	}

	/* Metodos asignaturas seleccionadas */
	agregarAsignatura(asignatura: Asignatura) {
		this.seleccion[asignatura.codigo] = new SeleccionItem(asignatura);
		this.saveToStorage();

		changeStreamController.updateChangeStreamListener();
	}

	eliminarAsignatura(asignatura: Asignatura) {
		this.limpiarHorario(asignatura);
		delete this.seleccion[asignatura.codigo];
		this.saveToStorage();

		changeStreamController.updateChangeStreamListener();
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
		if (groupValue === '') {
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

	getCarrerasSeleccionadas(): string[] {
		const carreras = Object.values(this.seleccion).map(({ asignatura }) => asignatura.carrera);
		return [...new Set(carreras)];
	}

	constructor() {
		if (!browser) return;

		if (this.hasValidStorage() === false) {
			return;
		}

		this.loadFromStorage();
		toastController.addMensaje('Horario cargado desde el almacenamiento local.');
	}
}

export const storeHorario = new StoreHorario();
