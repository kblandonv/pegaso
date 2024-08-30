<script lang="ts">
	import type { Asignatura } from '$src/lib/types';
	import { tipologias } from '$src/lib/utils/enums';

	import { controllerFiltro } from '$src/lib/controllers/controllerFiltro.svelte';
	import { storeAsignaturas } from '$src/lib/stores/asignaturas.svelte';

	let asignaturasFiltradas: Asignatura[] = $derived.by(() => {
		if (Object.keys(storeAsignaturas.data).length === 0) {
			return [];
		}

		const recordCarrera =
			storeAsignaturas.data[controllerFiltro.valueFacultad]?.[controllerFiltro.valueCarrera];

		if (controllerFiltro.valueTipologia === tipologias.TIPOLOGIA_TODAS) {
			return recordCarrera.asignaturas.filter(
				({ tipologia }) => tipologia !== tipologias.TIPOLOGIA_TODAS
			);
		}

		return recordCarrera.asignaturas.filter(
			({ tipologia }) => tipologia === controllerFiltro.valueTipologia
		);
	});

	import ListadoRow from './ListadoRow.svelte';

	function detailsAction(element: HTMLElement) {
		const button = element.querySelector('#details-button') as HTMLButtonElement;
		const listado = element.querySelector('#listado') as HTMLElement;
		listado.style.maxHeight = listado.scrollHeight + 'px';

		button.addEventListener('click', function () {
			button.classList.toggle('open');

			if (listado.style.maxHeight) {
				listado.style.maxHeight = '';
			} else {
				listado.style.maxHeight = listado.scrollHeight + 'px';
			}
		});
	}
</script>

<section class="w-full mt-4">
	{#if asignaturasFiltradas.length === 0}
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
				{#each asignaturasFiltradas as asignatura (`${asignatura.facultad}-${asignatura.carrera}-${asignatura.codigo}`)}
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
