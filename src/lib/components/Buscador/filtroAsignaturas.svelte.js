import { storeAsignaturas } from '$lib/stores/asignaturas.svelte.js';

class StoreFiltro {
	listadoFacultades = $derived.by(() => {
		return Object.keys(storeAsignaturas.data);
	});

	valueFacultad = $state('');
	valueCarrera = $state('');
	valueTipologia = $state('');

	listadoCarreras = $derived(this.valueFacultad ? storeAsignaturas.data[this.valueFacultad] : []);
	listadoMaterias = $derived(
		this.valueFacultad && this.valueCarrera ? this.listadoCarreras[this.valueCarrera] : []
	);
	listadoTipologias = $derived(
		this.listadoMaterias.length > 0
			? [
					'TODAS LAS ASIGNATURAS',
					...new Set(this.listadoMaterias.map((asignatura) => asignatura.tipologia))
				]
			: []
	);

	materiasFiltradas = $derived.by(() => {
		if (this.listadoMaterias.length === 0 || !this.valueTipologia) {
			return [];
		}

		if (this.valueTipologia === 'TODAS LAS ASIGNATURAS') {
			return this.listadoCarreras[this.valueCarrera];
		}

		return this.listadoCarreras[this.valueCarrera].filter(
			(asignatura) => asignatura.tipologia === this.valueTipologia
		);
	});

	changeFacultad(e) {
		this.valueCarrera = '';
		this.valueTipologia = '';
	}

	changeCarrera(e) {
		this.valueTipologia = '';
	}
}

export const storeFiltro = new StoreFiltro();
