import type { PageLoad } from './$types';
import { browser } from '$app/environment';
import { init } from '$lib/utils/firebase.js';

export const ssr = true;

export const load = (async ({ data }) => {
	let logDescargaEvent = () => {};

	if (browser) {
		logDescargaEvent = init(data.firebaseConfig);
	}

	return {
		...data,
		logDescargaEvent: logDescargaEvent
	};
}) satisfies PageLoad;
