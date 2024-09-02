import { dbController } from '../db/mongo';
import { toastController } from '../controllers/toastController.svelte';
import { storeAsignaturas } from './asignaturas.svelte';
import { storeHorario } from './horario.svelte';
import { controllerFiltro } from '../controllers/controllerFiltro.svelte';
import { browser } from '$app/environment';

import type { RecordCarrera, Metadata } from '$lib/types';

class ChangeStreamController {
	changeStreamCarreras: AsyncGenerator<Realm.Services.MongoDB.ChangeEvent<any>, any, any> | null =
		null;
	carrerasToWatch: string[] = [];

	constructor() {
		if (!browser) return;

		this.watchMetadata();
	}

	async watchMetadata() {
		const collConfig = dbController.db.db('asignaturas').collection('config');

		for await (const change of collConfig.watch({ ids: ['metadata'] })) {
			if (
				change.operationType !== 'replace' &&
				change.operationType !== 'insert' &&
				change.operationType !== 'update'
			) {
				continue;
			}

			const metadata = change.fullDocument as Metadata;
			storeAsignaturas.metadata.lastUpdated = metadata.lastUpdated;
		}
	}

	async listenChanges(carrerasToWatch: string[] = []) {
		let count = 0;

		const collAsignaturas = dbController.db.db('asignaturas').collection('carreras');
		this.changeStreamCarreras = collAsignaturas.watch({ ids: carrerasToWatch });

		for await (const change of this.changeStreamCarreras) {
			if (
				change.operationType !== 'replace' &&
				change.operationType !== 'insert' &&
				change.operationType !== 'update'
			) {
				continue;
			}

			count += 1;
			const { documentKey, fullDocument } = change;
			const facultad = fullDocument.facultad;
			const carrera = documentKey._id;

			delete fullDocument._id;

			storeAsignaturas.setAsignaturasCarrera(facultad, carrera, fullDocument as RecordCarrera);

			if (count === carrerasToWatch.length) {
				toastController.addMensaje('Cupos actualizados!');
				count = 0;
			}
		}
	}

	async deleteCurrentStream() {
		if (this.changeStreamCarreras !== null) {
			this.changeStreamCarreras.return(null);
			this.changeStreamCarreras = null;
		}
	}

	updateChangeStreamListener() {
		const carrerasToWatch = this.getDependenciasToWatch();

		// Si no ha cambiado la lista de carreras a observar, no hacer nada
		if (carrerasToWatch.length === this.carrerasToWatch.length) {
			return;
		}

		if (carrerasToWatch.length === 0) {
			this.carrerasToWatch = [];
			this.deleteCurrentStream();
			return;
		}

		this.deleteCurrentStream();
		this.listenChanges(carrerasToWatch);
		this.carrerasToWatch = carrerasToWatch;
	}

	hasDependencia(carrera: string) {
		return this.carrerasToWatch.includes(carrera);
	}

	getDependenciasToWatch(): string[] {
		const dependencias = storeHorario.getCarrerasSeleccionadas();

		const dependenciaBusqueda = controllerFiltro.getBusquedaActual();
		if (dependenciaBusqueda === '') {
			return dependencias;
		}

		dependencias.push(dependenciaBusqueda);

		return [...new Set(dependencias)];
	}
}

export const changeStreamController = new ChangeStreamController();
