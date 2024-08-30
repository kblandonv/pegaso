import * as Realm from 'realm-web';

async function loadListado() {
	// Add your App ID
	const app = new Realm.App({ id: 'application-0-kjuclwo' });

	// Create an anonymous credential
	const credentials = Realm.Credentials.anonymous();

	// Authenticate the user
	await app.logIn(credentials);

	// Connect to the database
	const mongodb = app.currentUser.mongoClient('mongodb-atlas');
	const collConfig = mongodb.db('asignaturas').collection('config');

	const document = await collConfig.findOne({ _id: "listado" });
	delete document._id;
	return document;
}

export async function load() {
	// const asignaturas = await loadAsignaturas();

	const listado = loadListado();

	return {
		// asignaturas: asignaturas,
		listado: listado,
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
