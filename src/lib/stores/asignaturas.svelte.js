let asignaturas = $state([]);
let materias = $state([]);
let seleccionadas = $state([]);
let horario = $state({});

export function getHorario() {

    function set(data) {
        horario = data;
    }

	return {
		get data() {
			return horario;
		},
        set
	};
}

export function getmateriasFiltradas() {

    function set(data) {
        materias = data;
    }

	return {
		get data() {
			return materias;
		},
        set
	};
}

export function getmateriasSeleccionadas() {

    function set(data) {
        seleccionadas = data;
    }

	return {
		get data() {
			return seleccionadas;
		},
        set
	};
}

export function getAsignaturas() {

    function asignar(data) {
        asignaturas = data;
    }

	return {
		get data() {
			return asignaturas;
		},
        asignar
	};
}