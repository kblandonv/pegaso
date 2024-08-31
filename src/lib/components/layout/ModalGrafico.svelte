<script lang="ts">
	import { Graficos } from '$src/lib/utils/enums';
	type Props = {
		width: number;
		height?: number;
		encabezado: any;
		contenido: any;
		grafico: Graficos;
	};

	const { width, height, encabezado, contenido, grafico }: Props = $props();

	import { storeAnalisis } from '$lib/stores/analisis.svelte';

	function dialogAction(element: HTMLDialogElement) {
		storeAnalisis.elementos[grafico] = element;

		const btnClose = element.querySelector('#dialog-hide') as HTMLButtonElement;
		btnClose.addEventListener('click', () => {
			element.close();
		});
	}
</script>

<dialog
	use:dialogAction
	class="z-10 rounded-2xl p-6 border border-purple-300 bg-purple-100/25 backdrop-blur-lg"
	style={`--w: ${width}rem; ${height ? `--h: ${height}rem;` : ''}`}
>
	<div>
		{@render encabezado()}
	</div>

	<div class="w-full">
		{@render contenido()}
	</div>

	<div class="flex justify-center mt-2">
		<button
			id="dialog-hide"
			type="button"
			class="flex bg-purple-500 text-white text-center size-8 rounded-full items-center justify-center hover:bg-purple-200 hover:text-purple-500"
		>
			<i class="bi bi-check-lg leading-none"></i>
		</button>
	</div>
</dialog>

<style lang="scss">
	dialog {
		transition: all 0.2s ease;
		width: auto;
		max-width: var(--w);

		&::backdrop {
			display: none;
		}

		&[open] {
			animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
		}
	}

	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
