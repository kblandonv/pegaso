<script>
	import { storeAnalisis } from '$lib/stores/analisis.svelte';

	let dialog;
	$effect(() => {
		storeAnalisis.elementos.docentes = dialog;
	});

	function hide() {
		dialog.close();
	}
	export function show() {
		dialog.show();
	}
</script>

<dialog bind:this={dialog} class="p-6">
	<h5 class="text-lg font-bold w-full text-center mb-2 font-mono">
		{storeAnalisis.analized ? storeAnalisis.analized.nombre : ''}
	</h5>

	<div id="contenedor-grafico">
		<h5 class="text-lg font-normal w-full text-center mb-2 font-mono">
			Docentes más seleccionados
		</h5>

		<div class="flex flex-col gap-2 my-4">
			{#if storeAnalisis.analized !== null}
				{#each storeAnalisis.analized.recomendaciones.sort((a, b) => b.puntaje - a.puntaje) as recomendacion, i (recomendacion.docente)}
					<div class="flex justify-between container-docente px-3 py-2 rounded-md">
						<p class="lead text-sm">
							<strong>{i + 1}</strong><span>. {recomendacion.docente}</span>
						</p>
						<p class="lead fw-medium text-sm">{recomendacion.puntaje}</p>
					</div>
				{/each}
			{/if}
		</div>

		<hr />

		<p class="my-3 font-mono text-justify text-base">
			Nota: puntajes generados mediante analisis de datos
		</p>
	</div>

	<div class="flex justify-center mt-4">
		<button onclick={hide} type="button" class="btn">
			<i class="bi bi-x"></i>
		</button>
	</div>
</dialog>

<style lang="scss">
	dialog {
		z-index: 10;
		background: rgba(238, 210, 255, 0.3);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(14.2px);
		-webkit-backdrop-filter: blur(14.2px);
		border: 1px solid rgba(238, 210, 255, 0.3);
		transition: all 0.2s ease;

		width: auto;
		height: auto;
		max-width: 25%;

		#contenedor-grafico {
			width: 100%;
			height: 100%;
		}

		.container-docente {
			&:hover {
				background-color: rgba(177, 94, 255, 0.1);
			}
		}

		button {
			background-color: #b26eff;
			color: white;
			font-weight: bold;
			text-align: center;

			width: 2rem;
			height: 2rem;
			border-radius: 50%;

			display: flex;
			justify-content: center;
			align-items: center;

			&:hover {
				background-color: #9345ff;
				color: white;
			}
		}
	}
</style>
