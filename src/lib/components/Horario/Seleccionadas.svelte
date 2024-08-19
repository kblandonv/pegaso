<script>
	import { flip } from 'svelte/animate';
	import MateriaRow from './MateriaRow.svelte';
	import { storeHorario } from '$lib/stores/horario.svelte';
	import BigHr from '$components/UI/BigHr.svelte';
	import Badge from '$components/UI/Badge.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let totalCreditos = $derived(
		Object.values(storeHorario.seleccion).reduce(
			(acc, obj) => acc + parseInt(obj.materia.creditos),
			0
		)
	);

	onMount(() => {
		if (!browser) return;

		const hasHorario = storeHorario.loadFromStorage();
		if (!hasHorario) {
			storeHorario.saveToStorage();
		}
	});
</script>

<div class="flex justify-between items-center mb-2">
	<div class="flex gap-3 items-center">
		<h1 class="text-2xl font-bold">Asignaturas seleccionadas</h1>
		<Badge>{Object.keys(storeHorario.seleccion).length}</Badge>
	</div>

	<span class="text-sm font-mono">Total Creditos: {totalCreditos}</span>
</div>
<BigHr />

<section class="w-full mb-4 mt-4">
	<div class="flex flex-wrap w-full text-center">
		<div class="col py-2 title-mono font-bold">Codigo</div>
		<div class="col-limit w-3/12 py-2 title-mono font-bold">Nombre</div>
		<div class="col py-2 title-mono font-bold">Creditos</div>
		<div class="col py-2 title-mono font-bold">Grupo</div>
		<div class="col-limit w-3/12 py-2 title-mono font-bold">Docente</div>
		<div class="col-limit w-1/12 py-2 title-mono font-bold">Cupos</div>
		<div class="col-1 w-12 py-2 title-mono font-bold"></div>
	</div>

	<div class="w-full flex flex-col gap-3">
		{#each Object.entries(storeHorario.seleccion) as entries (entries[0])}
			<div
				class={`flex flex-wrap seleccion p-2 rounded-md ${entries[1].color}`}
				animate:flip={{ duration: 200 }}
			>
				<MateriaRow color={entries[1].color} materia={entries[1].materia} />
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	.seleccion {
		background-color: #ffffff !important;
		border: 1px solid rgb(163, 82, 243, 0.3);
		box-shadow: 3px 3px 4px rgb(128, 72, 198, 0.2);

		position: relative;
		&::before {
			background-color: rgb(192, 136, 255);
			border-radius: 2px;

			left: 0.1rem;
			content: '';
			display: block;
			height: 80%;
			position: absolute;
			width: calc(0.4em);
			top: 50%;
			transform: translateY(-50%);
		}
	}

	.color-1::before {
		background-color: #ffdede;
	}

	.color-2::before {
		background-color: #ffb7b7;
	}

	.color-3::before {
		background-color: #fff5c3;
	}

	.color-4::before {
		background-color: #d1fff9;
	}

	.color-5::before {
		background-color: #cfffdf;
	}

	.color-6::before {
		background-color: #ffbaec;
	}

	.color-7::before {
		background-color: #cbceff;
	}

	.color-8::before {
		background-color: #acff9b;
	}

	.color-9::before {
		background-color: #e4d5ff;
	}

	.color-10::before {
		background-color: #dcb9ff;
	}

	.color-11::before {
		background-color: #ffd5f5;
	}

	.color-12::before {
		background-color: #f7d1ff;
	}
</style>
