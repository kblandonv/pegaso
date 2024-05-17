<script>
	import { storeAsignaturas } from '$lib/stores/asignaturas.svelte.js';
	import Listado from './Listado.svelte';
	import { storeFiltro } from "./filtroAsignaturas.svelte.js";
</script>


<section class="rounded container px-4 py-4 mt-3 mb-4 glass">
	<div class="row align-items-center">
		<div class="col">
			<label class="fw-bold" for="facultad">Facultad</label>
			<select id="facultad" class="mt-2 form-select form-select-sm" bind:value={storeFiltro.valueFacultad} onchange={()=> {storeFiltro.changeFacultad()}}>
				<option selected value=""> -- Seleccionar -- </option>
				{#each storeFiltro.listadoFacultades as facultad (facultad)}
					<option value={facultad}>{facultad}</option>
				{/each}
			</select>
		</div>

		<div class="col">
			<label class="fw-bold" for="carrera">Plan de estudios</label>
			<select id="carrera" class="mt-2 form-select form-select-sm" bind:value={storeFiltro.valueCarrera} onchange={()=> {storeFiltro.changeCarrera()}}>
				<option selected value=""> -- Seleccionar -- </option>
				{#each Object.keys(storeFiltro.listadoCarreras) as carrera (carrera)}
					<option value={carrera}>{carrera}</option>
				{/each}
			</select>
		</div>

		<div class="col">
			<label class="fw-bold" for="tipologia">Tipologia de asignatura</label>
			<select id="tipologia" class="mt-2 form-select form-select-sm" bind:value={storeFiltro.valueTipologia}>
				<option selected value=""> -- Seleccionar -- </option>
				{#each storeFiltro.listadoTipologias as tipologia (tipologia)}
					<option value={tipologia}>{tipologia}</option>
				{/each}
			</select>
		</div>
	</div>

	<div class="d-flex justify-content-between my-3">
		<span>
			<strong class="mt-4">Última actualización de cupos: </strong>
			<span>{storeAsignaturas.lastUpdate}</span>
		</span>

	</div>

	<hr class="hr-pink" />

	<Listado materiasFiltradas={storeFiltro.materiasFiltradas} />
</section>
