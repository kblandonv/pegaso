import { dbController } from '$db/mongo';
import { storeAsignaturas } from '$stores/asignaturas.svelte';
import { tipologias } from '../utils/enums';

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
	asignaturasFiltradas = [];

	async searchAsignaturas() {
		const recordCarrera = await dbController.getAsignaturas(this.valueCarrera);

		if (!storeAsignaturas.data.hasOwnProperty(this.valueFacultad)) {
			storeAsignaturas.data[this.valueFacultad] = {};
		}

		storeAsignaturas.data[this.valueFacultad][this.valueCarrera] = recordCarrera;
	}
}

export const controllerFiltro = new ControllerFiltro();
