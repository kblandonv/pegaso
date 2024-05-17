<script>
	import { flip } from 'svelte/animate';
	import MateriaRow from './MateriaRow.svelte';
	import { storeHorario } from '$lib/stores/horario.svelte.js';

	let totalCreditos = $derived(
		Object.values(storeHorario.seleccion).reduce((acc, obj) => acc + parseInt(obj.materia.creditos), 0)
	);
</script>

<div class="d-flex justify-content-between">
	<h5 class="font-sans fw-bold mb-3 text-lg" 
		>Asignaturas seleccionadas: {Object.keys(storeHorario.seleccion).length}</h5
	>
	<span>Total Creditos: {totalCreditos}</span>
</div>

<section class="container mb-4">
	<div class="row text-center">
		<div class="col-1 py-2 fw-bold">Codigo</div>
		<div class="col-2 py-2 fw-bold">Nombre</div>
		<div class="col-1 py-2 fw-bold">Creditos</div>
		<div class="col py-2 fw-bold">Grupo</div>
		<div class="col py-2 fw-bold">Docente</div>
		<div class="col-1 py-2 fw-bold">Cupos</div>
		<div class="col-2 py-2 fw-bold">Horario</div>
		<div class="col-1 py-2 fw-bold"></div>
	</div>

	<div class="w-full d-flex flex-column gap-2">
		{#each Object.entries(storeHorario.seleccion) as entries (entries[0])}
			<div class={`seleccion row p-2 rounded tr-${entries[1].color}`} animate:flip={{ duration: 200 }}>
				<MateriaRow color={entries[1].color} materia={entries[1].materia} />
			</div>
		{/each}
	</div>
</section>

<style lang="scss">

	.seleccion {
		background-color: hsl(276, 90%, 95%);
		position: relative;
		&::before {
			background-color: rgb(192, 136, 255);
			border-radius: 2px;
			left: -0.2rem;
			content: '';
			display: block;
			height: 80%;
			position: absolute;
			width: calc(0.5em);
			top: 50%;
			transform: translateY(-50%);
		}

	}

	.tr-color-1::before {
		background-color: #ffdede;
	}

	.tr-color-2::before {
		background-color: #ffb7b7;
	}

	.tr-color-3::before {
		background-color: #fff5c3;
	}

	.tr-color-4::before {
		background-color: #d1fff9;
	}

	.tr-color-5::before {
		background-color: #cfffdf;
	}

	.tr-color-6::before {
		background-color: #ffbaec;
	}

	.tr-color-7::before {
		background-color: #cbceff;
	}

	.tr-color-8::before {
		background-color: #acff9b;
	}

	.tr-color-9::before {
		background-color: #e4d5ff;
	}

	.tr-color-10::before {
		background-color: #dcb9ff;
	}

	.tr-color-11::before {
		background-color: #ffd5f5;
	}

	.tr-color-12::before {
		background-color: #f7d1ff;
	}
	

</style>