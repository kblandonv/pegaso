import { storeAsignaturas } from '$lib/stores/asignaturas.svelte';
import type { Asignatura } from '$lib/types';

interface StoreFiltro {
	valueFacultad: string;
	valueCarrera: string;
	valueTipologia: string;
	listadoFacultades: string[];
	listadoCarreras: { [carrera: string]: Asignatura[] };
	listadoMaterias: Asignatura[];
	listadoTipologias: string[];
	asignaturasFiltradas: Asignatura[];
}

class StoreFiltro implements StoreFiltro {
	valueFacultad: string = $state('');
	valueCarrera: string = $state('');
	valueTipologia: string = $state('');

	listadoFacultades: string[] = $derived.by(() => {
		return Object.keys(storeAsignaturas.data);
	});

	listadoCarreras = $derived(this.valueFacultad ? storeAsignaturas.data[this.valueFacultad] : {});
	listadoMaterias: Asignatura[] = $derived(
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

	asignaturasFiltradas: Asignatura[] = $derived.by(() => {
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

	changeFacultad() {
		this.valueCarrera = '';
		this.valueTipologia = '';
	}

	changeCarrera() {
		this.valueTipologia = '';
	}
}

export const storeFiltro = new StoreFiltro();
