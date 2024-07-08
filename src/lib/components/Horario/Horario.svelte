<script>
	const { logDescargaEvent } = $props();
	import { storeHorario } from '$lib/stores/horario.svelte';

	import Seleccionadas from './Seleccionadas.svelte';
	import CeldaHorario from './CeldaHorario.svelte';
	import BotonDescargar from './BotonDescargar.svelte';
	import Container from '$components/UI/Container.svelte';
	import BigHr from '$components/UI/BigHr.svelte';
</script>

<Container>
	<Seleccionadas />

	<hr class="hr-pink" />

	<div class="flex justify-between items-bottom mt-12">
		<div class="flex items-bottom gap-3">
			<h1 class="text-2xl font-bold">Horario</h1>
		</div>
		<BotonDescargar {logDescargaEvent} />
	</div>
	<BigHr />

	<section class="mt-8">
		<section class="horario-titulos text-center">
			<div class="px-4 title-mono font-bold py-2">Hora</div>
			<div class="px-4 title-mono font-bold py-2">Lunes</div>
			<div class="px-4 title-mono font-bold py-2">Martes</div>
			<div class="px-4 title-mono font-bold py-2">Miércoles</div>
			<div class="px-4 title-mono font-bold py-2">Jueves</div>
			<div class="px-4 title-mono font-bold py-2">Viernes</div>
			<div class="px-4 title-mono font-bold py-2">Sábado</div>
			<div class="px-4 title-mono font-bold py-2">Domingo</div>
		</section>

		<section class="horario rounded">
			<div class="horario-horas text-center">
				<div class="text-sm px-4 py-2.5 opacity-60">6:00 - 7:00</div>
				<div class="text-sm px-4 py-2.5 opacity-60">7:00 - 8:00</div>
				<div class="text-sm px-4 py-2.5 opacity-60">8:00 - 9:00</div>
				<div class="text-sm px-4 py-2.5 opacity-60">9:00 - 10:00</div>
				<div class="text-sm px-4 py-2.5 opacity-60">10:00 - 11:00</div>
				<div class="text-sm px-4 py-2.5 opacity-60">11:00 - 12:00</div>
				<div class="text-sm px-4 py-2.5 opacity-60">12:00 - 13:00</div>
				<div class="text-sm px-4 py-2.5 opacity-60">13:00 - 14:00</div>
				<div class="text-sm px-4 py-2.5 opacity-60">14:00 - 15:00</div>
				<div class="text-sm px-4 py-2.5 opacity-60">15:00 - 16:00</div>
				<div class="text-sm px-4 py-2.5 opacity-60">16:00 - 17:00</div>
				<div class="text-sm px-4 py-2.5 opacity-60">17:00 - 18:00</div>
				<div class="text-sm px-4 py-2.5 opacity-60">18:00 - 19:00</div>
				<div class="text-sm px-4 py-2.5 opacity-60">19:00 - 20:00</div>
			</div>

			<div class="horario-dias">
				{#each Object.values(storeHorario.seleccion) as seleccion}
					{#each seleccion.horarios as horario (JSON.stringify(horario))}
						<CeldaHorario {seleccion} {horario} />
					{/each}
				{/each}
			</div>
		</section>
	</section>
</Container>

<style class="scss">
	.horario-titulos {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
	}

	.horario {
		display: grid;
		grid-template-columns: 1fr 7fr;

		background-size: calc(100% / 8) calc(100% / 14);
		background-image: linear-gradient(to right, rgba(106, 0, 255, 0.15) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(106, 0, 255, 0.15) 1px, transparent 1px);
		border-bottom: 1px solid rgba(106, 0, 255, 0.06) !important;
		border-right: 1px solid rgba(106, 0, 255, 0.06) !important;
	}

	.horario-horas {
		display: grid;
		grid-template-rows: repeat(14, 1fr);
	}

	.horario-dias {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-template-rows: repeat(14, 1fr);
	}
</style>
