<script>
	let { materia, color } = $props();
	import { storeHorario } from '$lib/stores/horario.svelte';
	import { storeAnalisis } from '$lib/stores/analisis.svelte';

	let selectedGrupo = $derived(storeHorario.seleccion[materia.codigo].grupo);
	let agrupado = $derived(Object.groupBy(materia.grupos, ({ profesor }) => profesor));
	let initValue = storeHorario.seleccion[materia.codigo].groupValue;

	function handleChangeGrupo(e) {
		storeHorario.asignarHorario(materia, e.target.value);
	}

	function deleteMateria() {
		storeHorario.eliminarAsignatura(materia);
	}

	function showGrafico(e) {
		storeAnalisis.asignatura = materia;
		const grafico = this.dataset.graph;
		storeAnalisis.elementos[grafico].show();
	}
</script>

<div class="col rounded px-1">
	<button id="codigo" class="rounded w-100 h-100" data-graph="distribucion" onclick={showGrafico}>
		<i class="bi bi-bar-chart-line"></i>
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
	<select class="form-select form-select-sm" onchange={handleChangeGrupo} bind:value={initValue}>
		<option value="">No seleccionado</option>

		{#each Object.entries(agrupado) as entriesDocente (entriesDocente[0])}
			<optgroup label={entriesDocente[0]}>
				{#each entriesDocente[1] as grupo (grupo.grupo)}
					{@const isDisponible = storeHorario.verificarHorario(materia.codigo, grupo.horarios)}
					<option
						title={isDisponible !== true && `Conflicto: ${isDisponible.nombre}`}
						disabled={isDisponible !== true}
						value={grupo.grupo}>{grupo.grupo}</option
					>
				{/each}
			</optgroup>
		{/each}
	</select>
</div>
<button
	id="docente"
	class="col-3 rounded text-start text-sm"
	data-graph="docentes"
	onclick={showGrafico}
>
	<i class="bi bi-ui-checks"></i>
	{selectedGrupo && selectedGrupo.profesor}
</button>

<button
	id="cupos"
	class="col-1 rounded text-center text-sm"
	data-graph="cupos"
	onclick={showGrafico}
>
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

	optgroup {
		font-weight: 500;
		font-size: 0.875rem; /* 14px */

		option {
			font-size: 0.95rem; /* 16px */
			font-weight: 400;
			&:disabled {
				background-color: rgba(255, 154, 184, 0.07);
			}
		}
	}

	#codigo {
		cursor: pointer;
		background-color: rgba(177, 94, 255, 0.1);
		transition: all 0.3s ease-in-out;

		&:hover {
			background-color: rgba(185, 98, 255, 0.233);
		}
	}

	#cupos:hover,
	#docente:hover {
		cursor: pointer;
		transition: all 0.3s ease-in-out;
		background-color: rgba(177, 94, 255, 0.1);
	}
</style>
