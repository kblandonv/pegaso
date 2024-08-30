export const ssr = true;

import { browser } from '$app/environment';
import { init } from '$lib/utils/firebase.js';

export async function load({ data }) {
	let logDescargaEvent = () => {};

	if (browser) {
		logDescargaEvent = init(data.firebaseConfig);
	}

	return {
		asignaturas: data.asignaturas,
		logDescargaEvent: logDescargaEvent
	};
}
