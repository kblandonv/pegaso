<script>
	let { materia, color } = $props();
	import { storeHorario } from '$lib/stores/horario.svelte.js';
	import { storeAnalisis } from '$lib/stores/analisis.svelte.js';

	let groupValue = $state('');
	let selectedGrupo = $derived(materia.grupos.find((grupo) => grupo.grupo === groupValue));

	$effect(() => {
		if (selectedGrupo) {
			storeHorario.asignarHorario(materia, selectedGrupo);
		} else {
			storeHorario.limpiarHorario(materia);
		}
	});

	function deleteMateria() {
		storeHorario.eliminarAsignatura(materia);
	}

	function onclickShowGrafico(event) {
		storeAnalisis.asignatura = materia;
		storeAnalisis.elementos.cupos.show();
	}

	function showRecomendado(event) {
		storeAnalisis.asignatura = materia;
		storeAnalisis.elementos.distribucion.show();
	}

	function showDocentes(e) {
		storeAnalisis.asignatura = materia;
		storeAnalisis.elementos.docentes.show();
	}

	/*
	<div id="horario" class="col-2 ps-5 justify-content-center align-content-center text-sm">
		{#if selectedGrupo}
			{#each selectedGrupo.horarios as horario (`${horario.dia} ${horario.inicio}-${horario.fin}`)}
				<div>
					<i class="bi bi-clock"></i>
					<span class=""> {`${horario.dia} ${horario.inicio}-${horario.fin}`}</span>
				</div>
			{/each}
		{:else}
			<span></span>
		{/if}
	</div>
	*/

</script>

	<div class="col rounded px-1">
		<button id="codigo" class="rounded w-100 h-100" onclick={showRecomendado}>
			<span class="text-sm">{materia.codigo}</span>
		</button>
	</div>
	
	
	<div id="nombre" class="col-3 justify-content-center align-content-center text-sm">
		<span>{materia.nombre}</span>
	</div>
	
	<div class="col justify-content-center align-content-center text-center text-sm">
		<span>{materia.creditos}</span>
	</div>

	<div class="col justify-content-center align-content-center text-sm">
		<select class="form-select form-select-sm" bind:value={groupValue}>
			<option value="">No seleccionado</option>
			{#each materia.grupos as grupo (grupo.grupo)}
				{@const isDisponible = storeHorario.verificarHorario(materia.codigo, grupo.horarios)}
				<option
					title={isDisponible !== true && `Conflicto: ${isDisponible.nombre}`}
					disabled={isDisponible !== true}
					value={grupo.grupo}>{grupo.grupo}</option
				>
			{/each}
		</select>
	</div>
	<button id="docente" onclick={showDocentes} class="col-3 rounded text-start text-sm">
		{selectedGrupo && selectedGrupo.profesor}
	</button>
	
	<button onclick={onclickShowGrafico} id="cupos" class="col-1 rounded text-center text-sm">
		<i class="bi bi-graph-down"></i>
		<span>{selectedGrupo && selectedGrupo.cupos}</span>
	</button>
	
	
	<div class="col-1 w-10 justify-content-center align-content-center">
		<button onclick={deleteMateria} class="onclick-push-me delete-button"
			><i class="bi bi-x-square-fill text-2xl"></i></button
		>
	</div>

<style lang="scss">
	.delete-button {
		color: #ff8fb1;
		text-align: center;
		display: flex;
		margin: auto;

		justify-content: center;
		align-items: center;
		transition: all 0.2s ease-in-out;

		&:hover {
			color: #ff6b97;
			transform: scale(1.07);
		}
	}
	
	#codigo {
		cursor: pointer;
		background-color: rgba(177, 94, 255, 0.1);

		&:hover {
			background-color: rgba(185, 98, 255, 0.233);
		}
	}

	#cupos:hover, #docente:hover {
		cursor: pointer;
		background-color: rgba(177, 94, 255, 0.1);
	}


</style>
