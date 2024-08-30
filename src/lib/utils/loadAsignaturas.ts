import * as Realm from 'realm-web';
import type { StoreAsignaturasInterface } from '$lib/types';

export async function oldloadAsignaturas() {
	const url = 'https://raw.githubusercontent.com/imlargo/api/main/data.json';
	const asignaturas = await fetch(url + '?t=' + Date.now()).then((res) => res.json());
	return asignaturas;
}

export async function loadAsignaturas() {
	// Add your App ID
	const app = new Realm.App({ id: 'application-0-kjuclwo' });

	// Create an anonymous credential
	const credentials = Realm.Credentials.anonymous();

	// Authenticate the user
	await app.logIn(credentials); // const user =

	// Connect to the database
	const mongodb = app.currentUser.mongoClient('mongodb-atlas');
	const collAsignaturas = mongodb.db('asignaturas').collection('asignaturas');

	const documents = await collAsignaturas.find({}, { _id: 0 });

	const asignaturas: StoreAsignaturasInterface = Object.fromEntries(
		documents.map((doc) => {
			const facultad = doc._id;
			delete doc._id;
			return [facultad, doc];
		})
	);

	return asignaturas;
}
