<script>
	let { materia } = $props();

	import { getmateriasSeleccionadas } from '../../stores/horario.svelte.js';
	let materiasSeleccionadas = getmateriasSeleccionadas();
	
	let totalCupos = materia.grupos.reduce((acc, grupo) => acc + parseInt(grupo.cupos), 0);
	let isDisabled = $derived(materiasSeleccionadas.data.some(e => e.codigo === materia.codigo));

	// Event listener for the "Add" button
	function handleClick(e) {
		console.log(materia);
		materiasSeleccionadas.data.push(materia);
		
		// getPopUp(materia);
		// guardarMateria(materia, button);
		// updateDatosSelected();
	}
</script>

<tr>
	<td class="my-border px-2 text-center">{materia.codigo}</td>
	<td class="my-border px-2 text-center">{materia.creditos}</td>
	<td class="my-border px-2">{materia.nombre}</td>
	<td class="my-border px-2">
		<button
			class={`btn-add onclick-push-me ${isDisabled ? 'btn-add-disabled' : ''}`}
			onclick={handleClick}
			disabled={isDisabled}
		>
			<i class="bi bi-plus-square-fill text-2xl"></i>
		</button>
	</td>
	<td class="my-border px-2 text-center">{materia.tipologia}</td>
	<td class="my-border px-2 text-center">{totalCupos}</td>
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
	}
</style>
