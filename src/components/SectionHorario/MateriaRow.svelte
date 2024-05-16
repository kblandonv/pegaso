<script>
	let { materia, color } = $props();
	import { getStoreHorario, getStoreSeleccion } from '$lib/stores/horario.svelte.js';
	import { getStoreGrafico, getStoreRecomendado, getStoreDocente } from '$lib/stores/grafico.svelte.js';

	let storeGrafico = getStoreGrafico();
	let storeRecomendado = getStoreRecomendado();
	let storeDocente = getStoreDocente();

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
		storeGrafico.data.facultad = materia.facultad;
		storeGrafico.data.carrera = materia.carrera;
		storeGrafico.data.codigo = materia.codigo;

		storeGrafico.element.show();
	}

	function showRecomendado(event) {
		storeRecomendado.data.facultad = materia.facultad;
		storeRecomendado.data.carrera = materia.carrera;
		storeRecomendado.data.codigo = materia.codigo;

		storeRecomendado.element.show();
	}

	function showDocentes(e) {
		storeDocente.data.facultad = materia.facultad;
		storeDocente.data.carrera = materia.carrera;
		storeDocente.data.codigo = materia.codigo;
		
		storeDocente.element.show();
	}

</script>

<tr class={`tr-${color}`}>
	<td id="codigo" class="px-3 my-border" onclick={onclickShowGrafico}>
		<i class="bi bi-bar-chart-line"></i>
		<span>{materia.codigo}</span>
	</td>
	<td id="nombre" class="px-3 my-border">{materia.nombre}</td>
	<td class="px-3 my-border">{materia.creditos}</td>
	<td class="px-3 my-border">
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
	</td>
	<td id="docente" onclick={showDocentes} class="px-3 my-border">{selectedGrupo && selectedGrupo.profesor}</td>
	<td onclick={showRecomendado} id="cupos" class="px-3 my-border">
		{selectedGrupo && selectedGrupo.cupos}
	</td>
	<td id="horario" class="px-3 my-border"
		>{selectedGrupo &&
			selectedGrupo.horarios
				.map((horario) => `${horario.dia} ${horario.inicio}-${horario.fin}`)
				.join(', ')}</td
	>
	<td class="px-3 my-border">
		<button onclick={deleteMateria} class="onclick-push-me delete-button"
			><i class="bi bi-x-square-fill text-2xl"></i></button
		>
	</td>
</tr>

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
