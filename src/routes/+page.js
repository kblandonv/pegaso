export const csr = true;
import { browser } from '$app/environment'
import { init } from "$lib/utils/firebase.js"

export async function load({ params, data }) {

    let horarioLocal = null;
    let logDescargaEvent = () => {};
    if (browser) {
		horarioLocal = localStorage.getItem("horarioLocal");
        logDescargaEvent = init(data.firebaseConfig);
	}

	return {
        asignaturas: data.asignaturas,
        horarioLocal: horarioLocal ? JSON.parse(horarioLocal) : null,
        logDescargaEvent: logDescargaEvent,
    };
}