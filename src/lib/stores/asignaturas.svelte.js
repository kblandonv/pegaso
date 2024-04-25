let asignaturas = $state(0);

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