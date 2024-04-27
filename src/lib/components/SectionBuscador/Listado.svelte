<script>
	const { materiasFiltradas } = $props();
	import ListadoRow from './ListadoRow.svelte';

	let details;
	$effect(() => {
		details.open = materiasFiltradas.length > 0;
	});
</script>

<details id="collapse-materias" class="mt-4" bind:this={details}>
	<summary class="rounded-top py-2 px-3 font-bold">
		<div class="d-flex justify-content-between">
			<span id="asignaturas-cargadas">Asignaturas cargadas: {materiasFiltradas.length}</span>
			<i class="bi bi-chevron-down"></i>
		</div>
	</summary>
	<table class="table-auto w-full my-border rounded mb-4 my-table-hover">
		<thead class="text-center">
			<tr>
				<th class="my-border px-4 py-2">Código</th>
				<th class="my-border px-4 py-2">Créditos</th>
				<th class="my-border px-4 py-2">Nombre</th>
				<th class="my-border px-4 py-2">Agregar al horario</th>
				<th class="my-border px-4 py-2">Tipologia</th>
				<th class="my-border px-4 py-2">Cupos</th>
			</tr>
		</thead>
		<tbody id="materias">
			{#each materiasFiltradas as materia (materia.codigo)}
				<ListadoRow {materia} />
			{/each}
		</tbody>
	</table>
</details>
