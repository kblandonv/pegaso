<script>
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

	<div class="flex justify-between items-center mt-12">
		<div class="flex items-center gap-3">
			<h1 class="text-2xl font-bold">Horario</h1>
		</div>
		<BotonDescargar />
	</div>
	<BigHr />

	<section class="mt-8">
		<section class="horario-titulos text-center">
			<div class="px-4 font-mono font-medium py-2 truncate">Hora</div>
			<div class="px-4 font-mono font-medium py-2 truncate">Lunes</div>
			<div class="px-4 font-mono font-medium py-2 truncate">Martes</div>
			<div class="px-4 font-mono font-medium py-2 truncate">Miércoles</div>
			<div class="px-4 font-mono font-medium py-2 truncate">Jueves</div>
			<div class="px-4 font-mono font-medium py-2 truncate">Viernes</div>
			<div class="px-4 font-mono font-medium py-2 truncate">Sábado</div>
			<div class="px-4 font-mono font-medium py-2 truncate">Domingo</div>
		</section>

		<section class="horario rounded">
			<div class="horario-horas text-center">
				<div class="text-sm px-4 py-2.5 text-zinc-500 truncate">6:00 - 7:00</div>
				<div class="text-sm px-4 py-2.5 text-zinc-500 truncate">7:00 - 8:00</div>
				<div class="text-sm px-4 py-2.5 text-zinc-500 truncate">8:00 - 9:00</div>
				<div class="text-sm px-4 py-2.5 text-zinc-500 truncate">9:00 - 10:00</div>
				<div class="text-sm px-4 py-2.5 text-zinc-500 truncate">10:00 - 11:00</div>
				<div class="text-sm px-4 py-2.5 text-zinc-500 truncate">11:00 - 12:00</div>
				<div class="text-sm px-4 py-2.5 text-zinc-500 truncate">12:00 - 13:00</div>
				<div class="text-sm px-4 py-2.5 text-zinc-500 truncate">13:00 - 14:00</div>
				<div class="text-sm px-4 py-2.5 text-zinc-500 truncate">14:00 - 15:00</div>
				<div class="text-sm px-4 py-2.5 text-zinc-500 truncate">15:00 - 16:00</div>
				<div class="text-sm px-4 py-2.5 text-zinc-500 truncate">16:00 - 17:00</div>
				<div class="text-sm px-4 py-2.5 text-zinc-500 truncate">17:00 - 18:00</div>
				<div class="text-sm px-4 py-2.5 text-zinc-500 truncate">18:00 - 19:00</div>
				<div class="text-sm px-4 py-2.5 text-zinc-500 truncate">19:00 - 20:00</div>
			</div>

			<div class="horario-dias overflow-hidden">
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
