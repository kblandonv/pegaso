<script>
	import { flip } from 'svelte/animate';
	import MateriaRow from './MateriaRow.svelte';
	import { getStoreSeleccion } from '$lib/stores/horario.svelte.js';
	let storeSeleccion = getStoreSeleccion();

	let totalCreditos = $derived(
		Object.values(storeSeleccion.data).reduce((acc, obj) => acc + parseInt(obj.materia.creditos), 0)
	);
</script>

<details open class="mb-4">
	<summary class="rounded-top py-2 px-4 font-bold">
		<div class="d-flex justify-content-between">
			<span id="asignaturas-seleccionadas"
				>Asignaturas seleccionadas: {Object.keys(storeSeleccion.data).length}</span
			>
			<span id="total-creditos">Total Creditos: {totalCreditos}</span>
			<i class="bi bi-chevron-down"></i>
		</div>
	</summary>

	<section class="container border border-top-0 rounded mb-4">
        <div class="row text-center">
			<div class="col my-border py-2">Codigo</div>
			<div class="col my-border py-2">Nombre</div>
			<div class="col my-border py-2">Creditos</div>
			<div class="col my-border py-2">Grupo</div>
			<div class="col my-border py-2">Docente</div>
			<div class="col my-border py-2">Cupos</div>
			<div class="col my-border py-2">Horario</div>
			<div class="col my-border py-2">...</div>
		</div>

        <div class="calendar-body w-full" id="selected">
			{#each Object.entries(storeSeleccion.data) as entries (entries[0])}
				<div class={`row text-center border rounded mb-1 tr-${entries[1].color}`} animate:flip={{ duration: 200 }}>
					<MateriaRow color={entries[1].color} materia={entries[1].materia} />
				</div>
			{/each}
		</div>
	</section>
</details>
