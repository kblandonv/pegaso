import { dbController } from '$db/mongo';

import { storeAsignaturas } from '$stores/asignaturas.svelte';

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
			? ['TODAS LAS ASIGNATURAS', ...this.listado[this.valueFacultad][this.valueCarrera]]
			: []
	);

	changeFacultad() {
		console.log('Changed facultad');
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
