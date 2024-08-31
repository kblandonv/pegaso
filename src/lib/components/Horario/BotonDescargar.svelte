<script>
	import { ArrayToExcel } from '$src/lib/utils/utils';
	import { storeHorario } from '$lib/stores/horario.svelte';
	import { analytics } from '$src/lib/client/firebase';
	import { logEvent } from 'firebase/analytics';
	import { toastController } from '$src/lib/controllers/toastController.svelte';

	function descargar() {
		logEvent(analytics, 'descarga');
		toastController.addMensaje('Descargando horario como excel');

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
				d ? `${storeHorario.seleccion[d].asignatura.nombre}` : ''
			);

			return Array.from([`${hora}:00 - ${parseInt(hora) + 1}:00`, ...nombres]);
		});

		const titulosConsolidado = ['Código', 'Nombre', 'Créditos', 'Grupo', 'Docente', 'Horario'];

		const datosConsolidado = Object.entries(storeHorario.seleccion).map(([codigo, datos]) => {
			const { asignatura: materia, grupo } = datos;
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

<button
	class="flex gap-2 bg-purple-500 text-white font-medium rounded-md px-5 py-1.5"
	onclick={descargar}
>
	<i class="bi bi-download"></i>
	<span> Descargar</span>
</button>
