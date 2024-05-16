<script>
	let { materia } = $props();
	import { getContext } from 'svelte';
	import { storeHorario } from '$lib/stores/horario.svelte.js';
	
	const toastContext = getContext('toast');

	let isDisabled = $derived(Object.keys(storeHorario.seleccion).includes(materia.codigo));

	// Event listener for the "Add" button
	function handleClick(e) {
		toastContext.addToast(`Se agregó: ${materia.nombre}.`);
		storeHorario.agregarAsignatura(materia);
	}
</script>

<tr>
	<td class="my-border px-2 text-center">{materia.codigo}</td>
	<td class="my-border px-2 text-center">{materia.creditos}</td>
	<td class="my-border px-2">{materia.nombre}</td>
	<td class="my-border px-2">
		<button
			class='onclick-push-me'
			onclick={handleClick}
			disabled={isDisabled}
		>
			<i class="bi bi-plus-square-fill text-2xl"></i>
		</button>
	</td>
	<td class="my-border px-2 text-center">{materia.tipologia}</td>
	<td class="my-border px-2 text-center">{materia.grupos.reduce((acc, grupo) => acc + parseInt(grupo.cupos), 0)}</td>
</tr>

<style lang="scss">
	button {
		color: #b362ff;
		width: 50%;
		text-align: center;
		display: flex;
		margin: auto;
		justify-content: center;
		align-items: center;

		&:hover {
			color: #9345ff;
			transform: scale(1.08);
		}

		&:disabled, &[disabled]{
			color: rgba(156, 50, 255, 0.4) !important;
		}

	}

	tr:hover {
    	background: linear-gradient(90deg, rgba(111, 3, 244, 0.1), rgba(204, 57, 164, 0.1), rgba(255, 181, 210, 0.1));
	}
</style>
