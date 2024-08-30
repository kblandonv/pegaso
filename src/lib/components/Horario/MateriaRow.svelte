<script lang="ts">
	import type { Asignatura } from '$src/lib/types';

	type Props = {
		materia: Asignatura;
	};

	let { materia }: Props = $props();
	import { storeHorario } from '$lib/stores/horario.svelte';
	import { storeAnalisis } from '$lib/stores/analisis.svelte';

	let selectedGrupo = $derived(storeHorario.seleccion[materia.codigo].grupo);
	let agrupado = $derived(Object.groupBy(materia.grupos, ({ profesor }) => profesor));
	const initValue = storeHorario.seleccion[materia.codigo].groupValue;

	function handleChangeGrupo(e: any) {
		storeHorario.asignarHorario(materia, e.target.value as string);
	}

	function deleteMateria() {
		storeHorario.eliminarAsignatura(materia);
	}

	function showGrafico() {
		storeAnalisis.asignatura = materia;
		const grafico = this.dataset.graph;
		storeAnalisis.elementos[grafico].show();
	}
</script>

<div class="col rounded px-1">
	<button
		class="cursor-pointer bg-purple-100 hover:bg-purple-200 transition-all duration-200 rounded-md w-full h-full"
		data-graph="distribucion"
		onclick={showGrafico}
	>
		<i class="bi bi-bar-chart-line"></i>
		<span class="text-sm">{materia.codigo}</span>
	</button>
</div>

<div id="nombre" class="col-limit px-3 w-3/12 justify-center content-center text-sm">
	<span>{materia.nombre}</span>
</div>

<div class="col px-3 justify-center content-center text-center text-sm">
	<span>{materia.creditos}</span>
</div>

<div class="col justify-center content-center text-sm px-3">
	<select class="control-select" onchange={handleChangeGrupo} value={initValue}>
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
	class="col-limit w-3/12 rounded-lg text-start text-sm px-3 cursor-pointer transition-all duration-500 hover:bg-purple-100"
	data-graph="docentes"
	onclick={showGrafico}
>
	<i class="bi bi-ui-checks text-purple-500"></i>
	{selectedGrupo && selectedGrupo.profesor}
</button>

<button
	class="col-limit w-1/12 rounded text-center text-sm px-3 transition-all duration-500 hover:bg-purple-100"
	data-graph="cupos"
	onclick={showGrafico}
>
	<i class="bi bi-graph-down text-purple-500"></i>
	<span>{selectedGrupo && selectedGrupo.cupos}</span>
</button>

<div class="col-limit w-12 justify-center content-center px-3">
	<button
		onclick={deleteMateria}
		class="transition-all duration-300 hover:scale-105 active:scale-95 text-rose-400/80 hover:text-rose-400"
		><i class="bi bi-x-square-fill text-2xl"></i></button
	>
</div>
