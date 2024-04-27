<script>
	import { ArrayToExcel } from "../../utils/utils.js";
    import { getStoreHorario, getStoreSeleccion } from '../../stores/horario.svelte.js';
	let storeHorario = getStoreHorario();
	let storeSeleccion = getStoreSeleccion();

    function descargar() {

        const titulos = ['Hora', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

        const horario = Object.entries(storeHorario.data).map(data => {
            const [hora, dias] = data;

            const nombres = Object.values(dias).map(d => d ? `${storeSeleccion.data[d].materia.nombre}`: '');

            return Array.from([
                `${hora}:00 - ${parseInt(hora) + 1}:00`,
                ...nombres,
            ]);
        });

        const data = [titulos, ...horario];
		ArrayToExcel(data, 'Mi horario')
    }
</script>

<button class="btn btn-sm" onclick={descargar}>
		<i class="bi bi-download"></i>
		<span> Descargar</span>
</button>

<style lang="scss">
	button {
		transition: all 0.1s;
		background-color: #b759ff;
		color: white;
		font-weight: bold;

		&:hover {
			background-color: #a42cff;
			color: white;
			font-weight: bold;
			transform: scale(1.05);
		}

		&:active {
			transform: scale(0.96);
		}
	}
</style>
