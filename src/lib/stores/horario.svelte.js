let seleccionadas = $state({});
let horario = $state(Object.fromEntries(
	["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"].map(dia => {
		return [
			dia,
			Object.fromEntries(["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"].map(h => [h, null]))
		]
	})
));

function getDataHorario(horario) {
	const dia = horario.dia.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	const inicio = parseInt(horario.inicio.split(":")[0]);
	const fin = parseInt(horario.fin.split(":")[0]);
	return [dia, inicio, fin];
}

/* Metodos asignaturas seleccionadas */
function agregarMateria(materia) {
	seleccionadas[materia.codigo] = {
		materia: materia,
		horarios: null,
	};
}

function eliminarMateria(materia) {
	limpiarMateriaHorario(materia);
	delete seleccionadas[materia.codigo];
}

/* Metodos horario */

function eliminarHorarios(horarios) {
	for (const h of horarios) {
		const [dia, inicio, fin] = getDataHorario(h);

		for (let time = inicio; time < fin; time++) {
			horario[time][dia.toString()] = null;
		}
	}
}

function limpiarMateriaHorario(materia) {
	const toDelete = seleccionadas[materia.codigo].horarios;
	if (toDelete) {
		eliminarHorarios(toDelete);
	}
}

function asignarHorario(materia, horarios) {

	limpiarMateriaHorario(materia);

	seleccionadas[materia.codigo].horarios = horarios;

	for (const h of horarios) {
		const [dia, inicio, fin] = getDataHorario(h);

		for (let time = inicio; time < fin; time++) {
			horario[time][dia.toString()] = materia.codigo;
		}
	}
}

export function getHorario() {

	return {
		get data() {
			return horario;
		},
		asignar: asignarHorario,
		limpiar: limpiarMateriaHorario
	};
}

export function getmateriasSeleccionadas() {

	return {
		get data() {
			return seleccionadas;
		},
		agregar: agregarMateria,
		eliminar: eliminarMateria,
	};
}
