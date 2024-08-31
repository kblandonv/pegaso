import type { Asignatura } from '../types';
import { storeAsignaturas } from '../stores/asignaturas.svelte';

export function getPrerequisitos(
	asignatura: Asignatura,
	prerequisitos: { codigo: string; nombre: string }[] = []
) {
	if (asignatura.prerequisitos.length === 0) {
		return prerequisitos;
	}

	for (const prerequisito of asignatura.prerequisitos) {
		for (const { codigo, nombre } of prerequisito.asignaturas) {
			const exists = storeAsignaturas.data[asignatura.facultad][
				asignatura.carrera
			].asignaturas.find((asignatura) => asignatura.codigo === codigo);

			if (exists) {
				prerequisitos.push({
					codigo,
					nombre
				});
				getPrerequisitos(exists, prerequisitos);
			} else {
				continue;
			}
		}
	}

	return prerequisitos;
}
