<script>
	import { storeAnalisis } from '$lib/stores/analisis.svelte.js';
	import { createGraph } from '$lib/utils/utils.js';
	import { getStoreSeleccion } from '$lib/stores/horario.svelte.js';
	let storeSeleccion = getStoreSeleccion();

	let dialog;
	let canvas;
	$effect(() => {
		storeAnalisis.elementos.cupos = dialog;
	});

	$effect(() => {
		if (storeAnalisis.analized) {
			createGraph(
				canvas,
				storeAnalisis.analized,
				storeSeleccion.data[storeAnalisis.analized.codigo].grupo,
			);
		}
	});

	function hide() {
		dialog.close();
	}
	export function show() {
		dialog.show();
	}
</script>

<dialog bind:this={dialog} class="py-3 px-4">
	<h5 class="text-lg font-medium w-auto w-100 text-center mb-2">{storeAnalisis.asignatura ? storeAnalisis.asignatura.nombre : ''}</h5>

	<div id="contenedor-grafico">
		<canvas bind:this={canvas}></canvas>
	</div>

	<div class="d-flex justify-content-center mt-2">
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
		max-width: 60%;

		#contenedor-grafico {
			width: 100%;
			height: 100%;
		}

		h5 {
			font-family: 'JetBrains Mono', monospace;
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
