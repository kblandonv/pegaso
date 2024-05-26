import { initMongo } from '$lib/db/mongo.js';

class StoreAsignaturas {
    data = $state({});
    updated = $state(false);
    lastUpdate = $derived(this.data['3068 FACULTAD DE MINAS']['3534 INGENIERÍA DE SISTEMAS E INFORMÁTICA'][0].fechaExtraccion)

    constructor() {
        this.initMongo();
    }

    dispatchUpdated() {
        this.updated = true;
    }

    async initMongo() {
        const collAsignaturas = await initMongo();

        let count = 0;
        for await (const change of collAsignaturas.watch()) {
            count +=1;

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