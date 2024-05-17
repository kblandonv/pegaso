import { initMongo } from '$lib/db/mongo.js';


class StoreAsignaturas {
    data = $state({});
    updated = $state(false);

    constructor() {
        this.initMongo();
    }

    async initMongo() {
        const collAsignaturas = await initMongo();

        for await (const change of collAsignaturas.watch()) {
            const { documentKey, fullDocument } = change;
            const facultad = documentKey._id;
			delete fullDocument._id;
			this.data[facultad] = fullDocument;
            this.updated = true;
        }

    }
}

export const storeAsignaturas = new StoreAsignaturas();