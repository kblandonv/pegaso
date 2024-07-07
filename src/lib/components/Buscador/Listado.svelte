<script>
	const { materiasFiltradas } = $props();
	import ListadoRow from './ListadoRow.svelte';

	function detailsAction(element) {
		const button = element.querySelector('#details-button');
		const listado = element.querySelector('#listado');
		listado.style.maxHeight = listado.scrollHeight + 'px';

		button.addEventListener('click', function () {
			button.classList.toggle('open');

			if (listado.style.maxHeight) {
				listado.style.maxHeight = null;
			} else {
				listado.style.maxHeight = listado.scrollHeight + 'px';
			}
		});
	}
</script>

<section class="container mt-4">
	{#if materiasFiltradas.length === 0}
		<div class="row mt-3">
			<div class="p-0"><span>Por favor seleccione asignaturas...</span></div>
		</div>
	{:else}
		<div use:detailsAction>
			<div class="row">
				<div class="col title-mono p-0 font-bold">Código</div>
				<div class="col title-mono p-0 font-bold">Cupos</div>
				<div class="col-4 title-mono p-0 font-bold">Nombre</div>
				<div class="col title-mono p-0 font-bold">Créditos</div>
				<div class="col title-mono p-0 font-bold">Tipologia</div>
				<div class="col-1 title-mono p-0 font-bold">
					<div class="d-flex justify-content-end align-content-center pe-2">
						<button id="details-button" class="open pe-1"><i class="bi bi-chevron-up"></i></button>
					</div>
				</div>
			</div>

			<div id="listado" class="mt-3 p-0">
				{#each materiasFiltradas as materia (`${materia.facultad}-${materia.carrera}-${materia.codigo}`)}
					<ListadoRow {materia} />
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
