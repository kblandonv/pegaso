<script>
	import { storeAsignaturas } from '$lib/stores/asignaturas.svelte.js';
	import Listado from './Listado.svelte';
	import { storeFiltro } from './filtroAsignaturas.svelte.js';
	import Container from '$components/UI/Container.svelte';
	import BigHr from '$components/UI/BigHr.svelte';
	import Badge from '$components/UI/Badge.svelte';
	import { tooltipAction } from '$lib/utils/actions/tooltip.js';
</script>

<Container>
	<div class="d-flex justify-content-between align-items-center">
		<h1 class="text-2xl font-bold">Buscar asignaturas</h1>
		<button
			class="icon-purple pe-2"
			use:tooltipAction={'Selecciona una facultad, plan de estudios y tipología para filtrar las asignaturas y agregarlas a tu horario'}
		>
			<i class="bi bi-info-circle-fill"></i>
		</button>
	</div>

	<BigHr />

	<div class="row gap-3 align-items-center mt-4 mb-4">
		<div class="col">
			<label class="title-mono font-bold" for="facultad">Facultad</label>
			<select
				id="facultad"
				class="mt-2 form-select form-select-sm"
				bind:value={storeFiltro.valueFacultad}
				onchange={() => {
					storeFiltro.changeFacultad();
				}}
			>
				<option selected value=""> -- Seleccionar -- </option>
				{#each storeFiltro.listadoFacultades as facultad (facultad)}
					<option value={facultad}>{facultad}</option>
				{/each}
			</select>
		</div>

		<div class="col">
			<label class="title-mono font-bold" for="carrera">Plan de estudios</label>
			<select
				id="carrera"
				class="mt-2 form-select form-select-sm"
				bind:value={storeFiltro.valueCarrera}
				onchange={() => {
					storeFiltro.changeCarrera();
				}}
			>
				<option selected value=""> -- Seleccionar -- </option>
				{#each Object.keys(storeFiltro.listadoCarreras) as carrera (carrera)}
					<option value={carrera}>{carrera}</option>
				{/each}
			</select>
		</div>

		<div class="col">
			<label class="title-mono font-bold" for="tipologia">Tipologia</label>
			<select
				id="tipologia"
				class="mt-2 form-select form-select-sm"
				bind:value={storeFiltro.valueTipologia}
			>
				<option selected value=""> -- Seleccionar -- </option>
				{#each storeFiltro.listadoTipologias as tipologia (tipologia)}
					<option value={tipologia}>{tipologia}</option>
				{/each}
			</select>
		</div>
	</div>

	<hr class="hr-pink my-4" />

	<div class="d-flex justify-content-between align-items-bottom mt-4 mb-2">
		<div class="d-flex gap-3 align-items-bottom">
			<h2 class="text-xl font-bold">Asignaturas</h2>
			<Badge>{storeFiltro.materiasFiltradas.length}</Badge>
		</div>

		<div class="text-sm font-mono" use:tooltipAction={'Última actualización de cupos'}>
			<i class="bi bi-clock"></i>
			<span>{storeAsignaturas.lastUpdate}</span>
		</div>
	</div>

	<BigHr />

	<Listado materiasFiltradas={storeFiltro.materiasFiltradas} />
</Container>

<style lang="scss">
	.icon-purple {
		color: #a35af7;
	}
</style>
