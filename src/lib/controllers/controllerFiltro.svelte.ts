import { tipologias } from '$lib/utils/enums';
import { storeAsignaturas } from '$stores/asignaturas.svelte';
import { toastController } from './toastController.svelte';
import { changeStreamController } from '../stores/changeStreamController';

class ControllerFiltro implements ControllerFiltro {
	listado: Record<string, Record<string, string[]>> = $state({});

	valueFacultad: string = $state('');
	valueCarrera: string = $state('');
	valueTipologia: string = $state('');

	listadoCarreras: Record<string, string[]> = $derived(
		this.valueFacultad !== '' ? this.listado[this.valueFacultad] : {}
	);
	listadoTipologias: string[] = $derived(
		this.valueFacultad && this.valueCarrera
			? [tipologias.TIPOLOGIA_TODAS, ...this.listado[this.valueFacultad][this.valueCarrera]]
			: []
	);

	isNewSearch: boolean = true;

	changeFacultad(valueFacultad: string) {
		this.changeCarrera('');
		this.valueFacultad = valueFacultad;
	}

	changeCarrera(valueCarrera: string) {
		this.valueTipologia = '';
		this.valueCarrera = valueCarrera;

		this.isNewSearch = true;
		this.handleVisualizationChange();
	}

	changeTipologia(value: string) {
		this.valueTipologia = value;

		this.handleVisualizationChange();
		this.isNewSearch = false;
	}

	async searchAsignaturas() {
		toastController.addMensaje('Buscando asignaturas...');
		await storeAsignaturas.loadAsignaturasCarrera(this.valueCarrera);
		changeStreamController.updateChangeStreamListener();
	}

	async handleVisualizationChange() {
		// No se esta visualizando nada
		if (this.valueCarrera === '' || this.valueTipologia === '') {
			changeStreamController.updateChangeStreamListener();
			return;
		}

		const isCachedSearch = storeAsignaturas.hasCarrera(this.valueFacultad, this.valueCarrera);

		// Si la busqueda no esta en cache, no se esta visualizando nada
		if (isCachedSearch === false) return;

		if (this.isNewSearch && false === changeStreamController.hasDependencia(this.valueCarrera)) {
			// Si esta en cache actualiza la informacion
			await storeAsignaturas.loadAsignaturasCarrera(this.valueCarrera);
			toastController.addMensaje('Informacion actualizada ...');
		}

		// Actualiza las dependencias
		changeStreamController.updateChangeStreamListener();
	}

	getBusquedaActual() {
		if (this.valueCarrera === '' || this.valueTipologia === '') return '';

		const isSearched = storeAsignaturas.hasCarrera(this.valueFacultad, this.valueCarrera);
		return isSearched ? this.valueCarrera : '';
	}
}

export const controllerFiltro = new ControllerFiltro();
