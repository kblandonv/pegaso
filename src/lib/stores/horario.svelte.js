import { getDataHorario, getColor } from '../utils/utils';

let StoreSeleccion = $state({});
let StoreHorario = $state(
	Object.fromEntries(
		['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'].map((dia) => {
			return [
				dia,
				Object.fromEntries(
					['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'].map((h) => [
						h,
						null
					])
				)
			];
		})
	)
);

/* Metodos asignaturas seleccionadas */
function agregarMateriaSeleccion(materia) {
	StoreSeleccion[materia.codigo] = {
		materia: materia,
		horarios: null,
		color: getColor(),
		grupo: null,
	};
	saveToLocalHorario();
}

function eliminarMateriaSeleccion(materia) {
	limpiarMateriaHorario(materia);
	delete StoreSeleccion[materia.codigo];
	saveToLocalHorario();
}

/* Metodos horario */
function eliminarHorarios(horarios) {
	for (const h of horarios) {
		const { dia, inicio, fin } = getDataHorario(h);

		for (let time = inicio; time < fin; time++) {
			StoreHorario[time.toString()][dia.toString()] = null;
		}
	}
}

function limpiarMateriaHorario(materia) {
	const toDelete = StoreSeleccion[materia.codigo].horarios;
	if (toDelete) {
		eliminarHorarios(toDelete);
	}
	StoreSeleccion[materia.codigo].grupo = null;
}

function asignarHorario(materia, grupo) {
	limpiarMateriaHorario(materia);

	const horarios = grupo.horarios

	StoreSeleccion[materia.codigo].horarios = horarios;
	StoreSeleccion[materia.codigo].grupo = grupo;

	for (const h of horarios) {
		const { dia, inicio, fin } = getDataHorario(h);

		for (let time = inicio; time < fin; time++) {
			StoreHorario[time.toString()][dia.toString()] = materia.codigo;
		}
	}
}

function saveToLocalHorario() {
	localStorage.setItem('horarioLocal', JSON.stringify(StoreSeleccion));
}

function verificarGrupoHorario(codigo, horarios) {
	for (const h of horarios) {
		const { dia, inicio, fin } = getDataHorario(h);

		for (let time = inicio; time < fin; time++) {
			const materiaCodigo = StoreHorario[time.toString()][dia.toString()];
			if (materiaCodigo !== null && materiaCodigo !== codigo) {
				return StoreSeleccion[materiaCodigo].materia;
			}
		}
	}
	return true;
}

export function getStoreHorario() {
	return {
		get data() {
			return StoreHorario;
		},
		asignar: asignarHorario,
		limpiar: limpiarMateriaHorario,
		verificarHorarios: verificarGrupoHorario
	};
}

export function getStoreSeleccion() {
	return {
		get data() {
			return StoreSeleccion;
		},
		agregar: agregarMateriaSeleccion,
		eliminar: eliminarMateriaSeleccion,
		cargar: function (localHorario) {
			Object.values(localHorario).forEach((materia) => {
				agregarMateriaSeleccion(materia.materia);
			});
		}
	};
}
