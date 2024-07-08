import { loadAsignaturas } from '$lib/utils/loadAsignaturas';

export async function load({ params }) {
	const asignaturas = await loadAsignaturas();

	return {
		asignaturas: asignaturas,
		firebaseConfig: {
			apiKey: 'AIzaSyCcciQ7WCWm_giCSIQb5tVXdGGeuW09S9Y',
			authDomain: 'imlargo-sia-63857.firebaseapp.com',
			databaseURL: 'https://imlargo-sia-63857-default-rtdb.firebaseio.com',
			projectId: 'imlargo-sia-63857',
			storageBucket: 'imlargo-sia-63857.appspot.com',
			messagingSenderId: '1030629526226',
			appId: '1:1030629526226:web:714977fc33550929f2fb0b',
			measurementId: 'G-WGFXB8RZT3'
		}
	};
}
