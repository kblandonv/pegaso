<script>
	const { logDescargaEvent } = $props();
	import { ArrayToExcel } from "$lib/utils/utils.js";
    import { getStoreHorario, getStoreSeleccion } from '$lib/stores/horario.svelte.js';
	let storeHorario = getStoreHorario();
	let storeSeleccion = getStoreSeleccion();

    function descargar() {

		logDescargaEvent();
		
        const titulosHorario = ['Hora', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

        const datosHorario = Object.entries(storeHorario.data).map(data => {
            const [hora, dias] = data;

            const nombres = Object.values(dias).map(d => d ? `${storeSeleccion.data[d].materia.nombre}`: '');

            return Array.from([
                `${hora}:00 - ${parseInt(hora) + 1}:00`,
                ...nombres,
            ]);
        });

		const titulosConsolidado = [
			"Código",
			"Nombre",
			"Créditos",
			"Grupo",
			"Docente",
			"Horario",
		]

		const datosConsolidado = Object.entries(storeSeleccion.data).map(([codigo, datos]) => {
			const { materia, grupo } = datos;
			return [
				codigo,
				materia.nombre,
				materia.creditos,
				grupo.grupo,
				grupo.profesor,
				grupo.horarios.map((h) => `${h.dia} ${h.inicio}-${h.fin}`).join(',\n'),
			];
		});

        const data = [titulosHorario, ...datosHorario, Array(8).fill(''), titulosConsolidado, ...datosConsolidado];
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
