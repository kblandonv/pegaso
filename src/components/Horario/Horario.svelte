<script>
	const { logDescargaEvent } = $props();
	import { storeHorario } from '$lib/stores/horario.svelte.js';
	
	import Seleccionadas from './Seleccionadas.svelte';
	import CeldaHorario from './CeldaHorario.svelte';
	import BotonDescargar from './BotonDescargar.svelte';
	import Container from '$components/UI/Container.svelte';
	import BigHr from '$components/UI/BigHr.svelte';
</script>


<Container>
	<Seleccionadas />

	<hr class="hr-pink" />

	<div class="d-flex justify-content-between align-items-bottom mt-5">

		<div class="d-flex gap-3 align-items-bottom">
			<h1 class="text-2xl font-bold">Horario</h1>
		</div>

		<BotonDescargar {logDescargaEvent} />
	</div>
	<BigHr/>


	<table class="table-fixed w-full text-center rounded mt-4">
		<thead class="mb-5">
			<tr>
				<th class="px-4 title-mono font-bold py-2">Hora</th>
				<th class="px-4 title-mono font-bold py-2">Lunes</th>
				<th class="px-4 title-mono font-bold py-2">Martes</th>
				<th class="px-4 title-mono font-bold py-2">Miércoles</th>
				<th class="px-4 title-mono font-bold py-2">Jueves</th>
				<th class="px-4 title-mono font-bold py-2">Viernes</th>
				<th class="px-4 title-mono font-bold py-2">Sábado</th>
				<th class="px-4 title-mono font-bold py-2">Domingo</th>
			</tr>
		</thead>
		<tbody>
			{#each Object.entries(storeHorario.horario) as entry (entry[0])}
				<tr id={entry[0]}>
					<td class="text-sm my-border px-4 py-2 opacity-60"
						>{`${entry[0]}:00 - ${parseInt(entry[0]) + 1}:00`}</td
					>
					{#each Object.entries(entry[1]) as dias (dias[0])}
                        <CeldaHorario id={dias[0]} color={dias[1] ? storeHorario.seleccion[dias[1]].color : ''} materia={dias[1] ? storeHorario.seleccion[dias[1]].materia.nombre : ''} />
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</Container>
	
	

<style class="scss">
	td {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

</style>
