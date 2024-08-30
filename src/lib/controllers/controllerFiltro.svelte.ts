class ControllerFiltro implements ControllerFiltro {
	listado: Record<string, Record<string, string[]>> = $state({});

	valueFacultad: string = $state('');
	valueCarrera: string = $state('');
	valueTipologia: string = $state('');

	listadoFacultades: string[] = $derived.by(() => Object.keys(this.listado));
	listadoCarreras: Record<string, string[]> = $derived(
		this.valueFacultad ? this.listado[this.valueFacultad] : {}
	);
	listadoTipologias: string[] = $derived(
		this.valueFacultad && this.valueCarrera
			? ['TODAS LAS ASIGNATURAS', ...this.listado[this.valueFacultad][this.valueCarrera]]
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

	/* : Asignatura[] = $derived.by(() => {
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
	*/
}

export const controllerFiltro = new ControllerFiltro();
