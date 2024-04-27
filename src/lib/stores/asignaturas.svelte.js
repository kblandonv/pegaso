let asignaturas = $state([]);
let materias = $state([]);


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