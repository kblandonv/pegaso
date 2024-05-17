export const csr = true;
import { browser } from '$app/environment'
import { init } from "$lib/utils/firebase.js"
import { initMongo } from '$lib/db/mongo.js';

export async function load({ params, data }) {

    let logDescargaEvent = () => {};
    const collection = await initMongo();
    if (browser) {
        logDescargaEvent = init(data.firebaseConfig);
	}

	return {
        collection: collection,
        asignaturas: data.asignaturas,
        logDescargaEvent: logDescargaEvent,
    };
}