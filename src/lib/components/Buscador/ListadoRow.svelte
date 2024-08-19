<script lang="ts">
	import type { Asignatura } from '$src/lib/types';

	type Props = {
		materia: Asignatura;
	};

	let { materia }: Props = $props();
	import { getContext } from 'svelte';
	import { storeHorario } from '$lib/stores/horario.svelte';

	let isDisabled = $derived(Object.keys(storeHorario.seleccion).includes(materia.codigo));

	// Event listener for the "Add" button
	const toastContext: any = getContext('toast');
	function handleClick() {
		toastContext.addToast(`Se agregó: ${materia.nombre}.`);
		storeHorario.agregarAsignatura(materia);
	}

</script>

<div class="flex justify-between border-t border-purple-100 hover:bg-purple-50 items-center py-1">
	<div class="col text-sm ps-1">{materia.codigo}</div>
	<div class="col flex gap-1.5 text-sm p-0">
		<i class="bi bi-check2-circle"></i>{materia.grupos.reduce((acc, grupo) => acc + grupo.cupos, 0)}
	</div>
	<div class="col col-limit text-sm p-0 w-4/12">{materia.nombre}</div>
	<div class="col text-sm p-0">{materia.creditos}</div>
	<div class="col text-sm p-0">{materia.tipologia}</div>
	<div class="col text-sm p-0 col-limit w-1/12 flex justify-end">
		<button class="flex justify-end items-center transition-all duration-200 text-purple-500 text-end pe-2 w-20 disabled:text-purple-300 hover:text-purple-600 hover:scale-105 active:scale-95" onclick={handleClick} disabled={isDisabled}>
			<i class="bi bi-plus-square-fill text-2xl"></i>
		</button>
	</div>
</div>
