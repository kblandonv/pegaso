import { dbController } from '$db/mongo';

import type { StoreAsignaturasInterface } from '$lib/types';

class StoreAsignaturas {
	data: StoreAsignaturasInterface = $state({});
	updated: boolean = $state(false);

	dispatchUpdated() {
		this.updated = true;
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
