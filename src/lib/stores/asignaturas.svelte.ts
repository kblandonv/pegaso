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

	dispatchUpdated() {
		this.updated = true;
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

	async initMongo() {
		const collAsignaturas = dbController.db.db('asignaturas').collection('carreras');

		let count = 0;
		for await (const change of collAsignaturas.watch()) {
			if (
				change.operationType !== 'replace' &&
				change.operationType !== 'insert' &&
				change.operationType !== 'update'
			) {
				continue;
			}

			count += 1;

			const { documentKey, fullDocument } = change;
			const facultad = fullDocument.facultad;
			const carrera = documentKey._id;

			delete fullDocument._id;

			this.setAsignaturasCarrera(facultad, carrera, fullDocument as RecordCarrera);

			if (count === 5) {
				this.dispatchUpdated();
				count = 0;
			}
		}
	}
}

export const storeAsignaturas = new StoreAsignaturas();
