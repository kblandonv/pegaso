<script lang="ts">
	import { storeAsignaturas } from '$src/lib/stores/asignaturas.svelte';
	import { detailsAction } from '$src/lib/actions/details';
	import ListadoRow from './ListadoRow.svelte';
</script>

<section class="w-full mt-4">
	{#if storeAsignaturas.asignaturasFiltradas.length === 0}
		<div class="row mt-3">
			<div class="p-0"><span>Por favor seleccione asignaturas...</span></div>
		</div>
	{:else}
		<div use:detailsAction>
			<div class="flex flex-wrap w-full max-w-full justify-between">
				<div class="col p-0 font-mono font-medium">Código</div>
				<div class="col p-0 font-mono font-medium">Cupos</div>
				<div class="col-limit w-4/12 p-0 font-mono font-medium">Nombre</div>
				<div class="col p-0 font-mono font-medium">Créditos</div>
				<div class="col p-0 font-mono font-medium">Tipologia</div>
				<div class="col-limit w-1/12 p-0 font-mono font-medium">
					<div class="flex justify-end content-center pe-2">
						<button id="details-button" class="open pe-1"><i class="bi bi-chevron-up"></i></button>
					</div>
				</div>
			</div>

			<div id="listado" class="mt-3 p-0">
				{#each storeAsignaturas.asignaturasFiltradas as asignatura (`${asignatura.facultad}-${asignatura.carrera}-${asignatura.codigo}`)}
					<ListadoRow {asignatura} />
				{/each}
			</div>
		</div>
	{/if}
</section>

<style lang="scss">
	button {
		transition: all 0.4s ease;

		i {
			color: #c17fff;
		}
	}

	.open {
		transform: rotate(180deg);
	}

	#listado {
		overflow-x: visible;
		overflow-y: clip;
		max-height: 0px;
		transition: max-height 0.2s ease-out;
	}
</style>
