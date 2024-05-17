import { initMongo } from '$lib/db/mongo.js';


class StoreAsignaturas {
    data = $state({});
    updated = $state(false);

    constructor() {
        this.initMongo();
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
                this.updated = true;
                count = 0;
            }
        }

    }
}

export const storeAsignaturas = new StoreAsignaturas();