import { dbController } from '$db/mongo';

import type { StoreAsignaturasInterface, Asignatura } from '$lib/types';
import { controllerFiltro } from '$lib/controllers/controllerFiltro.svelte';
import { tipologias } from '$src/lib/utils/enums';

class StoreAsignaturas {
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

	async loadAsignaturasCarrera(carrera: string) {
		const recordCarrera = await dbController.getAsignaturas(carrera);

		if (!this.data.hasOwnProperty(recordCarrera.facultad)) {
			this.data[recordCarrera.facultad] = {};
		}

		this.data[recordCarrera.facultad][carrera] = recordCarrera;
	}

	async initMongo() {
		const collAsignaturas = dbController.db.db('asignaturas').collection('asignaturas');

		let count = 0;
		for await (const change of collAsignaturas.watch()) {
			count += 1;

			const { documentKey, fullDocument } = change;
			const facultad = documentKey._id;
			delete fullDocument._id;
			this.data[facultad] = fullDocument;

			if (count === 5) {
				this.dispatchUpdated();
				count = 0;
			}
		}
	}
}

export const storeAsignaturas = new StoreAsignaturas();
