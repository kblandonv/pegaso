<script lang="ts">
	import type { Asignatura } from '$src/lib/types';

	type Props = {
		asignatura: Asignatura;
	};

	let { asignatura }: Props = $props();

	import { getContext } from 'svelte';
	import { storeHorario } from '$lib/stores/horario.svelte';

	let isDisabled = $derived(Object.keys(storeHorario.seleccion).includes(asignatura.codigo));

	// Event listener for the "Add" button
	const toastContext: { addToast: (message: string) => void } = getContext('toast');
	function handleClick() {
		toastContext.addToast(`Se agregó: ${asignatura.nombre}.`);
		storeHorario.agregarAsignatura(asignatura);
	}

	let totalCupos = $derived(asignatura.grupos.reduce((acc, grupo) => acc + grupo.cupos, 0));
	let colorCupos = $derived(totalCupos === 0 ? 'agotado' : totalCupos < 20 ? 'mid' : 'disponible');
</script>

<div class="flex justify-between border-t border-purple-100 hover:bg-purple-50 items-center py-1">
	<div class="col text-sm ps-1">{asignatura.codigo}</div>
	<div class="col flex gap-1.5 text-sm p-0">
		<span
			class="inline-flex gap-1 items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset cupos-{colorCupos}"
		>
			<i class="bi bi-check2-circle"></i>{totalCupos}
		</span>
	</div>
	<div class="col col-limit text-sm p-0 w-4/12">{asignatura.nombre}</div>

	<div class="col text-sm p-0">
		<span
			class="inline-flex items-center rounded-md bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10"
		>
			{asignatura.creditos}
		</span>
	</div>

	<div class="col text-sm p-0">{asignatura.tipologia}</div>
	<div class="col text-sm p-0 col-limit w-1/12 flex justify-end">
		<button
			class="flex justify-end items-center transition-all duration-200 text-purple-500 text-end pe-2 w-20 disabled:text-purple-300 hover:text-purple-600 hover:scale-105 active:scale-95"
			onclick={handleClick}
			disabled={isDisabled}
		>
			<i class="bi bi-plus-square-fill text-2xl"></i>
		</button>
	</div>
</div>

<style lang="scss">
	.cupos-disponible {
		@apply bg-lime-50 text-lime-700 ring-lime-700/10;
	}
	.cupos-mid {
		@apply bg-orange-50 text-orange-700 ring-orange-700/10;
	}
	.cupos-agotado {
		@apply bg-rose-50 text-rose-700 ring-rose-700/10;
	}
</style>
