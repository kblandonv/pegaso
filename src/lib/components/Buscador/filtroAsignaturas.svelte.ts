import { storeAsignaturas } from '$lib/stores/asignaturas.svelte';
import type { Asignatura } from '$lib/types';

interface StoreFiltro {
	valueFacultad: string;
	valueCarrera: string;
	valueTipologia: string;
	listadoFacultades: string[];
	listadoCarreras: string[];
	listadoMaterias: string[];
	listadoTipologias: string[];
	materiasFiltradas: Asignatura[] | [];
}

class StoreFiltro implements StoreFiltro {
	listadoFacultades: string[] = $derived.by(() => {
		return Object.keys(storeAsignaturas.data);
	});

	valueFacultad: string = $state('');
	valueCarrera: string = $state('');
	valueTipologia: string = $state('');

	listadoCarreras: string[] = $derived(
		this.valueFacultad ? storeAsignaturas.data[this.valueFacultad] : []
	);
	listadoMaterias: string[] = $derived(
		this.valueFacultad && this.valueCarrera ? this.listadoCarreras[this.valueCarrera] : []
	);
	listadoTipologias: string[] = $derived(
		this.listadoMaterias.length > 0
			? [
					'TODAS LAS ASIGNATURAS',
					...new Set(this.listadoMaterias.map((asignatura) => asignatura.tipologia))
				]
			: []
	);

	materiasFiltradas: Asignatura[] | [] = $derived.by(() => {
		if (this.listadoMaterias.length === 0 || !this.valueTipologia) {
			return [];
		}

		if (this.valueTipologia === 'TODAS LAS ASIGNATURAS') {
			return this.listadoCarreras[this.valueCarrera];
		}

		return this.listadoCarreras[this.valueCarrera].filter(
			(asignatura: Asignatura) => asignatura.tipologia === this.valueTipologia
		);
	});

	changeFacultad(e: Event) {
		this.valueCarrera = '';
		this.valueTipologia = '';
	}

	changeCarrera(e: Event) {
		this.valueTipologia = '';
	}
}

export const storeFiltro = new StoreFiltro();
