<script>
	let { materia, color } = $props();
	import { getStoreHorario, getStoreSeleccion } from '$lib/stores/horario.svelte.js';
	import { storeAnalisis } from '$lib/stores/analisis.svelte.js';

	let storeHorario = getStoreHorario();
	let storeSeleccion = getStoreSeleccion();

	let groupValue = $state('');
	let selectedGrupo = $derived(materia.grupos.find((grupo) => grupo.grupo === groupValue));

	$effect(() => {
		if (selectedGrupo) {
			storeHorario.asignar(materia, selectedGrupo);
		} else {
			storeHorario.limpiar(materia);
		}
	});

	function deleteMateria() {
		storeSeleccion.eliminar(materia);
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

</script>

	<div id="codigo" class="col" onclick={onclickShowGrafico}>
		<i class="bi bi-bar-chart-line"></i>
		<span>{materia.codigo}</span>
	</div>
	<div id="nombre" class="col">{materia.nombre}</div>
	<div class="col">{materia.creditos}</div>
	<div class="col">
		<select class="form-select form-select-sm" bind:value={groupValue}>
			<option value="">No seleccionado</option>
			{#each materia.grupos as grupo (grupo.grupo)}
				{@const isDisponible = storeHorario.verificarHorarios(materia.codigo, grupo.horarios)}
				<option
					title={isDisponible !== true && `Conflicto: ${isDisponible.nombre}`}
					disabled={isDisponible !== true}
					value={grupo.grupo}>{grupo.grupo}</option
				>
			{/each}
		</select>
	</div>
	<div id="docente" onclick={showDocentes} class="col">{selectedGrupo && selectedGrupo.profesor}</div>
	<div onclick={showRecomendado} id="cupos" class="col">
		{selectedGrupo && selectedGrupo.cupos}
	</div>
	<div id="horario" class="col"
		>{selectedGrupo &&
			selectedGrupo.horarios
				.map((horario) => `${horario.dia} ${horario.inicio}-${horario.fin}`)
				.join(', ')}</div
	>
	<div class="col">
		<button onclick={deleteMateria} class="onclick-push-me delete-button"
			><i class="bi bi-x-square-fill text-2xl"></i></button
		>
	</div>

<style lang="scss">
	.delete-button {
		color: #ff8fb1;
		width: 50%;
		text-align: center;
		display: flex;
		margin: auto;
		justify-content: center;
		align-items: center;

		&:hover {
			color: #ff6b97;
		}
	}

	tr td:first-child {
		position: relative;
	}

	#codigo:hover, #cupos:hover, #docente:hover {
		cursor: pointer;
		background-color: rgba(177, 94, 255, 0.1);
	}

	tr td:first-child::before {
		background-color: rgb(192, 136, 255);
		border-radius: 2px;
		left: -0.25rem;
		content: '';
		display: block;
		height: 80%;
		position: absolute;
		width: calc(0.45em);
		top: 50%;
		transform: translateY(-50%);
	}

	td {
		text-align: center;
	}

	.tr-color-1 td:first-child::before {
		background-color: #ffdede;
	}

	.tr-color-2 td:first-child::before {
		background-color: #ffb7b7;
	}

	.tr-color-3 td:first-child::before {
		background-color: #fff5c3;
	}

	.tr-color-4 td:first-child::before {
		background-color: #d1fff9;
	}

	.tr-color-5 td:first-child::before {
		background-color: #cfffdf;
	}

	.tr-color-6 td:first-child::before {
		background-color: #ffbaec;
	}

	.tr-color-7 td:first-child::before {
		background-color: #cbceff;
	}

	.tr-color-8 td:first-child::before {
		background-color: #acff9b;
	}

	.tr-color-9 td:first-child::before {
		background-color: #e4d5ff;
	}

	.tr-color-10 td:first-child::before {
		background-color: #dcb9ff;
	}

	.tr-color-11 td:first-child::before {
		background-color: #ffd5f5;
	}

	.tr-color-12 td:first-child::before {
		background-color: #f7d1ff;
	}
</style>
