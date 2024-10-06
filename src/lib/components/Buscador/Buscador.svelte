<script lang="ts">
	import { controllerFiltro } from '$lib/controllers/controllerFiltro.svelte';

	import { tooltipAction } from '$lib/actions/tooltip';
	import Listado from './Listado.svelte';
	import BigHr from '$components/UI/BigHr.svelte';
	import Badge from '$components/UI/Badge.svelte';
	import Container from '$components/UI/Container.svelte';
	import { storeAsignaturas } from '$src/lib/stores/asignaturas.svelte';
</script>

<Container>
	<div class="flex justify-between items-center">
		<h1 class="text-2xl font-bold">Buscar asignaturas</h1>
		<button
			use:tooltipAction={'Selecciona una facultad, plan de estudios y tipología para filtrar las asignaturas y agregarlas a tu horario'}
		>
			<i class="bi bi-info-circle-fill text-purple-500"></i>
		</button>
	</div>

	<BigHr />

	<div
		class="grid grid-cols-1 grid-rows-3 md:grid-cols-10 md:grid-rows-1 gap-6 items-end mt-4 mb-4"
	>
		<div class="flex flex-col col-span-3">
			<label class="font-mono font-medium" for="facultad">Facultad</label>
			<select
				id="facultad"
				class="control-select mt-2"
				value={controllerFiltro.valueFacultad}
				onchange={function () {
					controllerFiltro.changeFacultad(this.value);
				}}
			>
				{#if Object.keys(controllerFiltro.listado).length === 0}
					<option selected value=""> Cargando... </option>
				{:else}
					<option selected value=""> -- Seleccionar -- </option>
					{#each Object.keys(controllerFiltro.listado).sort((a, b) => a
							.slice(5)
							.localeCompare(b.slice(5), 'es', { sensitivity: 'base' })) as facultad (facultad)}
						<option value={facultad}>{facultad}</option>
					{/each}
				{/if}
			</select>
		</div>

		<div class="flex flex-col col-span-3">
			<label class="font-mono font-medium" for="carrera">Plan de estudios</label>
			<select
				id="carrera"
				class="control-select mt-2"
				value={controllerFiltro.valueCarrera}
				onchange={function () {
					controllerFiltro.changeCarrera(this.value);
				}}
			>
				<option selected value=""> -- Seleccionar -- </option>
				{#each Object.keys(controllerFiltro.listadoCarreras).sort((a, b) => a
						.slice(5)
						.localeCompare(b.slice(5), 'es', { sensitivity: 'base' })) as carrera (carrera)}
					<option value={carrera}>{carrera}</option>
				{/each}
			</select>
		</div>

		<div class="flex flex-col col-span-3">
			<label class="font-mono font-medium" for="tipologia">Tipologia</label>
			<select
				id="tipologia"
				class="control-select mt-2"
				value={controllerFiltro.valueTipologia}
				onchange={function () {
					controllerFiltro.changeTipologia(this.value);
				}}
			>
				<option selected value=""> -- Seleccionar -- </option>
				{#each controllerFiltro.listadoTipologias as tipologia (tipologia)}
					<option value={tipologia}>{tipologia}</option>
				{/each}
			</select>
		</div>

		<div class="flex col-span-3 md:col-span-1 w-full">
			<button
				onclick={() => controllerFiltro.searchAsignaturas()}
				class="flex w-full justify-center gap-2 bg-purple-500 text-white font-medium rounded-md px-4 py-1.5"
			>
			<i class="bi bi-search"></i>	
			<span>Buscar</span>
				
			</button>
		</div>
	</div>

	<hr class="hr-pink my-8" />

	<div class="flex flex-col md:flex-row justify-between md:items-center mb-2">
		<div class="flex gap-4 items-center mb-2 md:mb-0">
			<h2 class="text-xl font-bold">Asignaturas</h2>
			<Badge>{storeAsignaturas.asignaturasFiltradas.length}</Badge>
		</div>

		<div class="text-sm font-mono" use:tooltipAction={'Última actualización de cupos'}>
			<i class="bi bi-clock text-violet-500"></i>
			<span>{storeAsignaturas.metadata.lastUpdated}</span>
		</div>
	</div>

	<BigHr />

	<Listado />
</Container>
