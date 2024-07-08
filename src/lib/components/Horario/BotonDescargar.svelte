<script>
	const { logDescargaEvent } = $props();
	import { ArrayToExcel } from '$src/lib/utils/utils';
	import { storeHorario } from '$lib/stores/horario.svelte';

	function descargar() {
		logDescargaEvent();

		const titulosHorario = [
			'Hora',
			'Lunes',
			'Martes',
			'Miércoles',
			'Jueves',
			'Viernes',
			'Sábado',
			'Domingo'
		];

		const datosHorario = Object.entries(storeHorario.horario).map((data) => {
			const [hora, dias] = data;

			const nombres = Object.values(dias).map((d) =>
				d ? `${storeHorario.seleccion[d].materia.nombre}` : ''
			);

			return Array.from([`${hora}:00 - ${parseInt(hora) + 1}:00`, ...nombres]);
		});

		const titulosConsolidado = ['Código', 'Nombre', 'Créditos', 'Grupo', 'Docente', 'Horario'];

		const datosConsolidado = Object.entries(storeHorario.seleccion).map(([codigo, datos]) => {
			const { materia, grupo } = datos;
			return [
				codigo,
				materia.nombre,
				materia.creditos,
				grupo.grupo,
				grupo.profesor,
				grupo.horarios.map((h) => `${h.dia} ${h.inicio}-${h.fin}`).join(',\n')
			];
		});

		const data = [
			titulosHorario,
			...datosHorario,
			Array(8).fill(''),
			titulosConsolidado,
			...datosConsolidado
		];
		ArrayToExcel(data, 'Mi horario');
	}
</script>

<button class="rounded-md px-2 py-1" onclick={descargar}>
	<i class="bi bi-download"></i>
	<span> Descargar</span>
</button>

<style lang="scss">
	button {
		width: 12.5%;
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
