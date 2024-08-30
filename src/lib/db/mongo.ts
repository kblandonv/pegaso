import * as Realm from 'realm-web';

import type { RecordCarrera } from '$lib/types';

async function initMongoDb() {
	// Add your App ID
	const app = new Realm.App({ id: 'application-0-kjuclwo' });

	// Create an anonymous credential
	const credentials = Realm.Credentials.anonymous();

	// Authenticate the user
	await app.logIn(credentials); // const user =

	if (!app.currentUser) {
		return null;
	}

	// Connect to the database
	const mongodb = app.currentUser.mongoClient('mongodb-atlas');

	return mongodb;
}

async function createDbController() {
	const db = await initMongoDb();

	if (db === null) {
		throw new Error('Error initializing database');
	}

	return new DbController(db);
}

class DbController {
	db: globalThis.Realm.Services.MongoDB;
	constructor(db: globalThis.Realm.Services.MongoDB) {
		this.db = db;
	}

	async getAsignaturas(carrera: string): Promise<RecordCarrera> {
		const collCarreras = this.db.db('asignaturas').collection('carreras');
		const asignaturas = await collCarreras.findOne({ _id: carrera });
		return asignaturas;
	}

	async getListado(): Promise<Record<string, Record<string, string[]>>> {
		const collConfig = this.db.db('asignaturas').collection('config');
		const listado = await collConfig.findOne({ _id: 'listado' });
		delete listado._id;
		return listado;
	}

	async getLastUpdate(): Promise<string> {
		const collConfig = this.db.db('asignaturas').collection('config');
		const lastUpdate = await collConfig.findOne({ _id: 'lastUpdate' });
		return lastUpdate.fechaExtraccion;
	}
}

export const dbController = await createDbController();
