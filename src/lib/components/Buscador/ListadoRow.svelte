<script>
	let { materia } = $props();
	import { getContext } from 'svelte';
	import { storeHorario } from '$lib/stores/horario.svelte';

	let isDisabled = $derived(Object.keys(storeHorario.seleccion).includes(materia.codigo));

	// Event listener for the "Add" button
	const toastContext = getContext('toast');
	function handleClick(e) {
		toastContext.addToast(`Se agregó: ${materia.nombre}.`);
		storeHorario.agregarAsignatura(materia);
	}
</script>

<div class="flex justify-between row-asignatura items-center py-1">
	<div class="col text-sm p-0">{materia.codigo}</div>
	<div class="col text-sm p-0"><i class="bi bi-check2-circle"></i>{materia.grupos.reduce((acc, grupo) => acc + parseInt(grupo.cupos),0)}</div>
	<div class="col col-limit text-sm p-0  w-4/12">{materia.nombre}</div>
	<div class="col text-sm p-0">{materia.creditos}</div>
	<div class="col text-sm p-0">{materia.tipologia}</div>
	<div class="col text-sm p-0 col-limit w-1/12 flex justify-end"><button class="onclick-push-me pe-2 w-20" onclick={handleClick} disabled={isDisabled}><i class="bi bi-plus-square-fill text-2xl"></i></button></div>
</div>

<style lang="scss">
	.row-asignatura {
		border-top: 1px solid #e5caff;

		&:hover {
			background: linear-gradient(
				90deg,
				rgba(111, 3, 244, 0.05),
				rgba(204, 57, 164, 0.05),
				rgba(255, 181, 210, 0.05)
			);
		}
	}

	button {
		color: #b362ff;
		text-align: end;
		display: flex;
		justify-content: end;
		align-items: center;
		transition: all 0.2s ease-in-out;

		&:hover {
			color: #9345ff;
			transform: scale(1.08);
		}

		&:disabled,
		&[disabled] {
			color: rgba(156, 50, 255, 0.4) !important;
		}
	}
</style>
