<script lang="ts">
	import type { Asignatura, Grupo } from '$src/lib/types';
	let { asignatura }: { asignatura: Asignatura } = $props();

	import { Graficos } from '$src/lib/utils/enums';
	import { storeHorario } from '$lib/stores/horario.svelte';
	import { storeAnalisis } from '$lib/stores/analisis.svelte';

	let selectedGrupo = $derived(storeHorario.seleccion[asignatura.codigo].grupo);
	let agrupado: [string, Grupo[]][] = $derived(
		Object.entries(Object.groupBy(asignatura.grupos, ({ profesor }) => profesor)) as [
			string,
			Grupo[]
		][]
	);

	function handleChangeGrupo(e: any) {
		storeHorario.asignarHorario(asignatura, e.target.value as string);
	}

	function deleteMateria() {
		storeHorario.eliminarAsignatura(asignatura);
	}

	function showGrafico(grafico: string) {
		storeAnalisis.dispatchAnalizis(asignatura, grafico as Graficos);
	}
</script>

<div class="col rounded px-1">
	<button
		class="py-1 cursor-pointer bg-purple-100 hover:bg-purple-200 transition-all duration-200 rounded-md w-full h-full"
		data-graph={Graficos.DISTRIBUCION_DOCENTES}
		onclick={function () {
			showGrafico(this.dataset.graph as string);
		}}
	>
		<i class="bi bi-bar-chart-line"></i>
		<span class="text-sm">{asignatura.codigo}</span>
	</button>
</div>

<div id="nombre" class="col-limit px-3 md:w-3/12 justify-center content-center text-sm">
	<span>{asignatura.nombre}</span>
</div>

<div class="col px-3 justify-center content-center text-center text-sm">
	<span>{asignatura.creditos}</span>
</div>

<div class="col justify-center content-center text-sm px-3">
	<select
		class="control-select"
		onchange={handleChangeGrupo}
		value={storeHorario.seleccion[asignatura.codigo].groupValue}
	>
		<option value="">No seleccionado</option>

		{#each agrupado as [docente, grupos] (docente)}
			<optgroup label={docente}>
				{#each grupos as grupo (grupo.grupo)}
					{@const isDisponible = storeHorario.verificarHorario(asignatura.codigo, grupo.horarios)}
					<option
						title={isDisponible === true ? '' : `Conflicto: ${isDisponible.nombre}`}
						disabled={isDisponible !== true}
						value={grupo.grupo}>{grupo.grupo}</option
					>
				{/each}
			</optgroup>
		{/each}
	</select>
</div>
<button
	class="col-limit md:w-3/12 rounded-lg text-start text-sm px-3 cursor-pointer transition-all duration-500 hover:bg-purple-100"
	data-graph={Graficos.DOCENTES_RECOMENDADOS}
	onclick={function () {
		showGrafico(this.dataset.graph as string);
	}}
>
	<i class="bi bi-ui-checks text-purple-500"></i>
	{Object.keys(selectedGrupo).length > 0 ? selectedGrupo.profesor : ''}
</button>

<button
	class="col-limit md:w-1/12 rounded text-center text-sm px-3 transition-all duration-500 hover:bg-purple-100"
	data-graph={Graficos.DISTRIBUCION_CUPOS}
	onclick={function () {
		showGrafico(this.dataset.graph as string);
	}}
>
	<i class="bi bi-graph-down text-purple-500"></i>
	<span>{Object.keys(selectedGrupo).length > 0 ? selectedGrupo.cupos : ''}</span>
</button>

<div class="col-limit md:w-12 justify-center content-center px-3">
	<button
		onclick={deleteMateria}
		class="flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 rounded bg-rose-400/80 hover:bg-rose-400 text-white/90 w-full"
		>
		<i class="bi bi-x text-2xl leading-none mx-0 px-0"></i>
		</button
	>
</div>
