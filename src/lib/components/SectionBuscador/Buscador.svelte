<script>
	import { onMount } from 'svelte';
	import Listado from './Listado.svelte';

	import { getAsignaturas, getmateriasFiltradas } from '../../stores/asignaturas.svelte.js';
	let asignaturas = getAsignaturas();
	let materiasFiltradas = getmateriasFiltradas();
	
	let selectFacultad;
	let selectCarrera;
	let selectTipologia;
	let componentListado;

	function filtrarMaterias(asignaturas, facultad, carrera, tipologia) {
        const allMaterias = asignaturas[facultad][carrera];
        const isAll = tipologia === "TODAS LAS ASIGNATURAS";
        return isAll ? allMaterias : allMaterias.filter(materia => materia.tipologia === tipologia);
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
		addOptions(selectFacultad, Object.keys(asignaturas.data));

		selectFacultad.addEventListener('change', function () {
			const carreras = Object.keys(asignaturas.data[this.value]);
			addOptions(selectCarrera, carreras);
			selectCarrera.dispatchEvent(new Event('change'));
		});

		selectCarrera.addEventListener('change', function () {
			const facultad = selectFacultad.value;
			const carrera = this.value;
			const materiasCarrera = asignaturas.data[facultad][carrera];
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

        	const materias = filtrarMaterias(asignaturas.data, facultad, carrera, tipologia);

			materiasFiltradas.set(materias);
        
        	// document.getElementById("collapse-materias").open = true;
        	// document.getElementById("asignaturas-cargadas").textContent = `Asignaturas cargadas: ${materias.length}`;
        	// mostrarListadoMaterias(materias);
		});

		// Dispatch change event to start
		selectFacultad.dispatchEvent(new Event('change'));

	});
</script>

<section class="rounded container px-3 py-4 mt-3 mb-4 glass">
	<div class="row align-items-center mb-4">
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

	<hr class="hr-pink" />

	<Listado bind:this={componentListado}/>
</section>
