export const csr = true;
import { browser } from '$app/environment'

import { init } from "$lib/utils/firebase.js"

export async function load({ params, data }) {

    const url = "https://raw.githubusercontent.com/imlargo/api/main/data.json";
    const uniqueUrl = url + "?t=" + Date.now();

    const raw = await fetch(uniqueUrl, {
        method: 'GET',
        cache: 'no-store'
    });
    const asignaturas = await raw.json();

    let horarioLocal = null;
    let logDescargaEvent = () => {};
    if (browser) {
		horarioLocal = localStorage.getItem("horarioLocal");
        logDescargaEvent = init(data.firebaseConfig);
	}

	return {
        asignaturas: asignaturas,
        horarioLocal: horarioLocal ? JSON.parse(horarioLocal) : null,
        logDescargaEvent: logDescargaEvent,
    };
}