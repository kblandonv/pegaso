<script>
	import { flip } from 'svelte/animate';
	import MateriaRow from './MateriaRow.svelte';
	import { storeHorario } from '$lib/stores/horario.svelte.js';

	let totalCreditos = $derived(
		Object.values(storeHorario.seleccion).reduce((acc, obj) => acc + parseInt(obj.materia.creditos), 0)
	);
</script>

<div class="d-flex justify-content-between">
	<h5 class="font-sans fw-bold mb-3 text-lg" 
		>Asignaturas seleccionadas: {Object.keys(storeHorario.seleccion).length}</h5
	>
	<span>Total Creditos: {totalCreditos}</span>
</div>

<section class="container mb-4">
	<div class="row text-center">
		<div class="col-1 py-2 fw-bold">Codigo</div>
		<div class="col-2 py-2 fw-bold">Nombre</div>
		<div class="col-1 py-2 fw-bold">Creditos</div>
		<div class="col py-2 fw-bold">Grupo</div>
		<div class="col py-2 fw-bold">Docente</div>
		<div class="col-1 py-2 fw-bold">Cupos</div>
		<div class="col-2 py-2 fw-bold">Horario</div>
		<div class="col-1 py-2 fw-bold"></div>
	</div>

	<div class="w-full d-flex flex-column gap-2">
		{#each Object.entries(storeHorario.seleccion) as entries (entries[0])}
			<div class={`row p-2 border rounded tr-${entries[1].color}`} animate:flip={{ duration: 200 }}>
				<MateriaRow color={entries[1].color} materia={entries[1].materia} />
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	

</style>