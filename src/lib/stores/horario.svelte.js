import { getDataHorario } from "../utils/utils";

let StoreSeleccion = $state({});
let StoreHorario = $state(Object.fromEntries(
	["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"].map(dia => {
		return [
			dia,
			Object.fromEntries(["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"].map(h => [h, null]))
		]
	})
));

/* Metodos asignaturas seleccionadas */
function agregarMateriaSeleccion(materia) {
	StoreSeleccion[materia.codigo] = {
		materia: materia,
		horarios: null,
	};
}

function eliminarMateriaSeleccion(materia) {
	limpiarMateriaHorario(materia);
	delete StoreSeleccion[materia.codigo];
}

/* Metodos horario */
function eliminarHorarios(horarios) {
	for (const h of horarios) {
		const {dia, inicio, fin} = getDataHorario(h);

		for (let time = inicio; time < fin; time++) {
			StoreHorario[time][dia.toString()] = null;
		}
	}
}

function limpiarMateriaHorario(materia) {
	const toDelete = StoreSeleccion[materia.codigo].horarios;
	if (toDelete) {
		eliminarHorarios(toDelete);
	}
}

function asignarHorario(materia, horarios) {

	limpiarMateriaHorario(materia);

	StoreSeleccion[materia.codigo].horarios = horarios;

	for (const h of horarios) {
		const {dia, inicio, fin} = getDataHorario(h);

		for (let time = inicio; time < fin; time++) {
			StoreHorario[time][dia.toString()] = materia.codigo;
		}
	}
}

export function getStoreHorario() {

	return {
		get data() {
			return StoreHorario;
		},
		asignar: asignarHorario,
		limpiar: limpiarMateriaHorario
	};
}

export function getStoreSeleccion() {

	return {
		get data() {
			return StoreSeleccion;
		},
		agregar: agregarMateriaSeleccion,
		eliminar: eliminarMateriaSeleccion,
	};
}
