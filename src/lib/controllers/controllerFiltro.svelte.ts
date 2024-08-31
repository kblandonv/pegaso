import { tipologias } from '$lib/utils/enums';
import { storeAsignaturas } from '$stores/asignaturas.svelte';
import { toastController } from './toastController.svelte';

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

	changeFacultad() {
		this.valueCarrera = '';
		this.valueTipologia = '';
	}

	changeCarrera() {
		this.valueTipologia = '';
	}

	async searchAsignaturas() {
		toastController.addMensaje('Buscando asignaturas...');
		await storeAsignaturas.loadAsignaturasCarrera(this.valueCarrera);
	}
}

export const controllerFiltro = new ControllerFiltro();
