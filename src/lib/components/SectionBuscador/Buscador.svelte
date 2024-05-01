<script>
	import { onMount } from 'svelte';
	import Listado from './Listado.svelte';
	import { getStoreSeleccion } from '$lib/stores/horario.svelte.js';
	let storeSeleccion = getStoreSeleccion();

	const { asignaturas, horarioLocal } = $props();

	if (horarioLocal !== null) {
		storeSeleccion.cargar(horarioLocal);
	}

	let materiasFiltradas = $state([]);
	let selectFacultad;
	let selectCarrera;
	let selectTipologia;

	let lastUpdate = asignaturas["3068 FACULTAD DE MINAS"]["3534 INGENIERÍA DE SISTEMAS E INFORMÁTICA"][0].fechaExtraccion;

	function filtrarMaterias(asignaturas, facultad, carrera, tipologia) {
		const allMaterias = asignaturas[facultad][carrera];
		const isAll = tipologia === 'TODAS LAS ASIGNATURAS';
		return isAll ? allMaterias : allMaterias.filter((materia) => materia.tipologia === tipologia);
	}

	function addOptions(element, options) {
		element.innerHTML = '';
		options.forEach((option) => {
			const optionElement = document.createElement('option');
			optionElement.value = option;
			optionElement.textContent = option;
			element.appendChild(optionElement);
		});
	}

	onMount(() => {
		// Agregar facultades
		addOptions(selectFacultad, Object.keys(asignaturas));

		selectFacultad.addEventListener('change', function () {
			const carreras = Object.keys(asignaturas[this.value]);
			addOptions(selectCarrera, carreras);
			selectCarrera.dispatchEvent(new Event('change'));
		});

		selectCarrera.addEventListener('change', function () {
			const facultad = selectFacultad.value;
			const carrera = this.value;
			const materiasCarrera = asignaturas[facultad][carrera];
			const tipologias = [
				'TODAS LAS ASIGNATURAS',
				...new Set(materiasCarrera.map((materia) => materia.tipologia))
			];
			addOptions(selectTipologia, tipologias);
			selectTipologia.dispatchEvent(new Event('change'));
		});

		selectTipologia.addEventListener('change', function () {
			const facultad = selectFacultad.value;
			const carrera = selectCarrera.value;
			const tipologia = this.value;

			// Asignar materias al estado
			materiasFiltradas = filtrarMaterias(asignaturas, facultad, carrera, tipologia);
		});

		// Dispatch change event to start
		selectFacultad.dispatchEvent(new Event('change'));
	});
</script>

<section class="rounded container px-3 py-4 mt-3 mb-4 glass">
	<div class="row align-items-center">
		<div class="col">
			<label class="fw-bold" for="facultad">Facultad</label>
			<select id="facultad" class="mt-2 form-select form-select-sm" bind:this={selectFacultad}>
			</select>
		</div>

		<div class="col">
			<label class="fw-bold" for="carrera">Plan de estudios</label>
			<select id="carrera" class="mt-2 form-select form-select-sm" bind:this={selectCarrera}>
			</select>
		</div>

		<div class="col">
			<label class="fw-bold" for="tipologia">Tipologia de asignatura</label>
			<select id="tipologia" class="mt-2 form-select form-select-sm" bind:this={selectTipologia}>
			</select>
		</div>
	</div>

	<div class="my-3">
		<span>
			<strong class="mt-4">Última actualización de cupos: </strong>
			<span>{lastUpdate}</span>
		</span>
	</div>

	<hr class="hr-pink" />

	<Listado {materiasFiltradas} />
</section>
