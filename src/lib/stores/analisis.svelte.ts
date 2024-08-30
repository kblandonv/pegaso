// import * as jsonAnalisis from '$lib/assets/analisis.json';

import type { Asignatura } from '../types';
// const analisisData = jsonAnalisis.default;
class Analisis {
	asignatura: Asignatura | null = $state(null);
	elementos = $state({
		cupos: null,
		docentes: null,
		distribucion: null
	});
	analized = null; /*
	$derived(
		this.asignatura
			? analisisData[this.asignatura.facultad][this.asignatura.carrera][this.asignatura.codigo]
			: null
	);
	*/

	constructor() {}
}

export const storeAnalisis = new Analisis();
