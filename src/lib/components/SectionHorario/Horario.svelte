<script>
	const { logDescargaEvent } = $props();
	import { getStoreHorario, getStoreSeleccion } from '$lib/stores/horario.svelte.js';
	let storeHorario = getStoreHorario();
	let storeSeleccion = getStoreSeleccion();

	import Seleccionadas from '$lib/components/SectionHorario/Seleccionadas.svelte';
	import CeldaHorario from './CeldaHorario.svelte';
	import BotonDescargar from './BotonDescargar.svelte';
	
</script>

<section class="rounded container px-3 py-4 my-4 glass">
	
	<Seleccionadas />

	<div class="rounded-top border p-3 font-bold d-flex justify-content-between align-items-center">
		<h2>Horario</h2>

		<div class="d-flex justify-content-between">
			<BotonDescargar {logDescargaEvent} />
		</div>
	</div>

	<table class="table-fixed w-full text-center my-border rounded" id="calendar">
		<thead>
			<tr>
				<th class="my-border px-4 py-2">Hora</th>
				<th class="my-border px-4 py-2">Lunes</th>
				<th class="my-border px-4 py-2">Martes</th>
				<th class="my-border px-4 py-2">Miércoles</th>
				<th class="my-border px-4 py-2">Jueves</th>
				<th class="my-border px-4 py-2">Viernes</th>
				<th class="my-border px-4 py-2">Sábado</th>
				<th class="my-border px-4 py-2">Domingo</th>
			</tr>
		</thead>
		<tbody id="calendar-body">
			{#each Object.entries(storeHorario.data) as entry (entry[0])}
				<tr id={entry[0]}>
					<td class="my-border px-4 py-2 opacity-60"
						>{`${entry[0]}:00 - ${parseInt(entry[0]) + 1}:00`}</td
					>
					{#each Object.entries(entry[1]) as dias (dias[0])}
                        <CeldaHorario id={dias[0]} color={dias[1] ? storeSeleccion.data[dias[1]].color : ''} materia={dias[1] ? storeSeleccion.data[dias[1]].materia.nombre : ''} />
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</section>

<style class="scss">
	td {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

</style>
