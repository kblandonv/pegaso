import { dbController } from '$db/mongo';
import type { StoreAsignaturasInterface, Asignatura, Metadata, RecordCarrera } from '$lib/types';
import { controllerFiltro } from '$lib/controllers/controllerFiltro.svelte';
import { tipologias } from '$src/lib/utils/enums';

class StoreAsignaturas {
	metadata: Metadata = $state({
		lastUpdated: '...'
	});
	data: StoreAsignaturasInterface = $state({});
	updated: boolean = $state(false);
	asignaturasFiltradas: Asignatura[] = $derived.by(() => {
		if (
			!Object.keys(this.data).includes(controllerFiltro.valueFacultad) ||
			!Object.keys(this.data[controllerFiltro.valueFacultad]).includes(
				controllerFiltro.valueCarrera
			)
		) {
			return [];
		}

		const recordCarrera =
			this.data[controllerFiltro.valueFacultad]?.[controllerFiltro.valueCarrera];

		if (controllerFiltro.valueTipologia === tipologias.TIPOLOGIA_TODAS) {
			return recordCarrera.asignaturas.filter(
				({ tipologia }) => tipologia !== tipologias.TIPOLOGIA_TODAS
			);
		}

		return recordCarrera.asignaturas.filter(
			({ tipologia }) => tipologia === controllerFiltro.valueTipologia
		);
	});

	hasCarrera(facultad: string, carrera: string): boolean {
		const hasFacultad = facultad in this.data;

		if (!hasFacultad) {
			return false;
		}

		const hasCarrera = carrera in this.data[facultad];
		return hasCarrera;
	}

	async setAsignaturasCarrera(facultad: string, carrera: string, recordCarrera: RecordCarrera) {
		if (!this.data.hasOwnProperty(facultad)) {
			this.data[facultad] = {};
		}

		this.data[facultad][carrera] = recordCarrera;
	}

	async loadAsignaturasCarrera(carrera: string) {
		const recordCarrera = await dbController.getAsignaturas(carrera);
		this.setAsignaturasCarrera(recordCarrera.facultad, carrera, recordCarrera);
	}
}

export const storeAsignaturas = new StoreAsignaturas();
