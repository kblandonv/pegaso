<script>
	let { materia, color } = $props();
	import { getStoreHorario, getStoreSeleccion } from '../../stores/horario.svelte.js';
	import { getStoreGrafico } from "$lib/stores/grafico.svelte.js";

	let storeGrafico = getStoreGrafico();
	let storeHorario = getStoreHorario();
	let storeSeleccion = getStoreSeleccion();

	let groupValue = $state('');
	let selectedGrupo = $derived(materia.grupos.find((grupo) => grupo.grupo === groupValue));

	$effect(() => {
		if (selectedGrupo) {
			storeHorario.asignar(materia, selectedGrupo.horarios);
		} else {
			storeHorario.limpiar(materia);
		}
	});

	function deleteMateria() {
		storeSeleccion.eliminar(materia);
	}

	function onclickShowGrafico(event) {
		storeGrafico.codigo = materia.codigo;
		storeGrafico.element.show();
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
				<option disabled={!storeHorario.verificarHorarios(materia.codigo, grupo.horarios)} value={grupo.grupo}>{grupo.grupo}</option>
			{/each}
		</select>
	</td>
	<td id="docente" class="px-3 my-border">{selectedGrupo && selectedGrupo.profesor}</td>
	<td id="cupos" class="px-3 my-border">{selectedGrupo && selectedGrupo.cupos}</td>
	<td id="horario" class="px-3 my-border"
		>{selectedGrupo &&
			selectedGrupo.horarios
				.map((horario) => `${horario.dia} ${horario.inicio}-${horario.fin}`)
				.join(', ')}</td
	>
	<td class="px-3 my-border">
		<button onclick={deleteMateria} class="onclick-push-me my-delete-button"
			><i class="bi bi-x-square-fill text-2xl"></i></button
		>
	</td>
</tr>

<style>
	tr td:first-child {
		position: relative;
	}

	#codigo:hover {
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
