
let seleccionadas = $state({});
export function getmateriasSeleccionadas() {


	return {
		get data() {
			return seleccionadas;
		},
		set data(value) {
			seleccionadas = value;
		}
	};
}


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


export function getHorario() {

	function asignar(materia, horarios) {

		const toDelete = seleccionadas[materia.codigo].toDelete;
		if (toDelete) {
			for (const h of toDelete) {
				const [dia, inicio, fin] = getDataHorario(h);

				for (let time = inicio; time < fin; time++) {
					horario[time][dia.toString()] = null;
				}
			}
		}

		seleccionadas[materia.codigo].horarios = horarios;
		seleccionadas[materia.codigo].toDelete = horarios;

		for (const h of horarios) {
			const [dia, inicio, fin] = getDataHorario(h);

			for (let time = inicio; time < fin; time++) {
				horario[time][dia.toString()] = materia.codigo;
			}
		}

	}

	return {
		get data() {
			return horario;
		},
		asignar,
	};
}
