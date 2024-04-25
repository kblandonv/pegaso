<script>
	
	import { getAsignaturas } from '../../stores/asignaturas.svelte.js';
	let asignaturas = getAsignaturas();
	
	
	
	/*
	import { onMount } from 'svelte';
	import LastUpdate from './LastUpdate.svelte';
	import Listado from './Listado.svelte';

	
	const lastUpdate = asignaturas['3068 FACULTAD DE MINAS']['3534 INGENIERÍA DE SISTEMAS E INFORMÁTICA'][0].fechaExtraccion;
	const facultades = Object.keys(asignaturas);

	let selectFacultad;
	let selectCarrera;
	let selectTipologia;

	let listadoInstance;
	let materiasFiltradas = [];

	function filtrarMaterias(facultad, carrera, tipologia) {
		const allMaterias = asignaturas[facultad][carrera];
		const isAll = tipologia === 'TODAS LAS ASIGNATURAS';
		return isAll ? allMaterias : allMaterias.filter((materia) => materia.tipologia === tipologia);
	}

	function addOptions(el, options) {
		el.innerHTML = '';
		options.forEach((option) => {
			const optionEl = document.createElement('option');
			optionEl.value = option;
			optionEl.textContent = option;
			el.appendChild(optionEl);
		});
	}

	onMount(() => {
		selectFacultad.addEventListener('change', () => {
			const facultadSeleccionada = selectFacultad.value;
			const carreras = Object.keys(asignaturas[facultadSeleccionada]);
			selectCarrera.innerHTML = '';
			addOptions(selectCarrera, carreras);
		});

		// Event listener for career selection
		selectCarrera.addEventListener('change', function () {
			const facultad = selectFacultad.value;
			const carrera = selectCarrera.value;
			const materias = asignaturas[facultad][carrera];
			const tipologias = [
				'TODAS LAS ASIGNATURAS',
				...new Set(materias.map((materia) => materia.tipologia))
			];

			addOptions(selectTipologia, tipologias);

			selectTipologia.dispatchEvent(new Event('change'));
		});

		selectTipologia.addEventListener('change', function () {
			const facultad = selectFacultad.value;
			const carrera = selectCarrera.value;
			const tipologia = this.value;

			materiasFiltradas = filtrarMaterias(facultad, carrera, tipologia);
			
			listadoInstance.open();
        	//mostrarListadoMaterias(materias);
		});

		selectFacultad.dispatchEvent(new Event('change'));
	});

		<LastUpdate lastUpdate={lastUpdate} />

	<Listado bind:this={listadoInstance} materias={materiasFiltradas} />

	*/

</script>

<section class="rounded container px-3 py-4 mt-3 mb-4 glass">
	<div class="row align-items-center mb-4">
		<div class="col">
			<label class="fw-bold" for="facultad">Facultad</label>
			<select id="facultad" class="mt-2 form-select form-select-sm">
				
			</select>
		</div>

		<div class="col">
			<label class="fw-bold" for="carrera">Plan de estudios</label>
			<select id="carrera" class="mt-2 form-select form-select-sm">
			</select>
		</div>

		<div class="col">
			<label class="fw-bold" for="tipologia">Tipologia de asignatura</label>
			<select id="tipologia" class="mt-2 form-select form-select-sm">
			</select>
		</div>
	</div>

	<hr class="hr-pink" />


</section>
