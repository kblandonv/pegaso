import * as Realm from 'realm-web';

export async function initMongo() {
	// Add your App ID
	const app = new Realm.App({ id: 'application-0-kjuclwo' });

	// Create an anonymous credential
	const credentials = Realm.Credentials.anonymous();

	// Authenticate the user
	const user = await app.logIn(credentials);

	// Connect to the database
	const mongodb = app.currentUser.mongoClient('mongodb-atlas');
	const collAsignaturas = mongodb.db('asignaturas').collection('asignaturas');

	return collAsignaturas;
}
