<script>
	const { materiasFiltradas } = $props();
	import ListadoRow from './ListadoRow.svelte';
</script>

<section class="container mt-4">
	{#if materiasFiltradas.length === 0}
		<div class="row mt-3">
			<div class="p-0"><span>Por favor seleccione asignaturas...</span></div>
		</div>
	{:else}
		<div class="row">
			<div class="p-0 col title-mono font-bold">Código</div>
			<div class="p-0 col title-mono font-bold">Cupos</div>
			<div class="p-0 col-4 title-mono font-bold">Nombre</div>
			<div class="p-0 col title-mono font-bold">Créditos</div>
			<div class="p-0 col title-mono font-bold">Tipologia</div>
			<div class="p-0 col-1 title-mono font-bold">
				<div class="d-flex justify-content-end align-content-center pe-2">
					<button class="pe-1"><i class="bi bi-chevron-down"></i></button>
				</div>
			</div>
		</div>

		<div class="mt-3">
			{#each materiasFiltradas as materia (`${materia.facultad}-${materia.carrera}-${materia.codigo}`)}
				<ListadoRow {materia} />
			{/each}
		</div>
	{/if}
</section>

<style lang="scss">
</style>
