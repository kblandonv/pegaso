<script lang="ts">
	const { data } = $props();
	import { Graficos } from '$src/lib/utils/enums';
	import { getPrerequisitos } from '$src/lib/utils/prerequisitos';

	import { storeAsignaturas } from '$lib/stores/asignaturas.svelte';
	import { controllerFiltro } from '$lib/controllers/controllerFiltro.svelte';
	import { storeAnalisis } from '$src/lib/stores/analisis.svelte';

	data.listado.then((listado) => {
		controllerFiltro.listado = listado;
	});
	data.metadata.then((metadata) => {
		storeAsignaturas.metadata = metadata;
	});

	import '$src/styles/horario.scss';
	import '$src/styles/action-control.scss';
	import Seo from '$components/Seo.svelte';
	import Buscador from '$components/Buscador';
	import Horario from '$components/Horario';
	import Toast from '$components/layout/Toast.svelte';
	import ModalGrafico from '$src/lib/components/layout/ModalGrafico.svelte';
	import { storeHorario } from '$src/lib/stores/horario.svelte';
</script>

<Seo />
<svelte:head>
	<title>Pegaso - App</title>
</svelte:head>

<div class="flex items-center justify-center">
	<div class="flex bg-violet-500 rounded-xl px-6 py-4 w-4/12">
		<h1 class="inline-flex gap-2 text-center text-lg text-white">
			<i class="bi bi-info-circle"></i>
			El sitio se encuentra en remodelacion, algunas cosas podrian no funcionar correctamente.
		</h1>
	</div>
</div>

<!-- Buscador de cursos -->
<Buscador />

<hr class="hr-pink" />

<ModalGrafico width={40} grafico={Graficos.DISTRIBUCION_DOCENTES}>
	{#snippet encabezado()}
		<h5 class="text-lg w-full text-center mb-3 font-bold font-mono">
			{storeAnalisis.currentAsignatura ? storeAnalisis.currentAsignatura.nombre : ''}
		</h5>
	{/snippet}

	{#snippet contenido()}
		<canvas></canvas>
	{/snippet}
</ModalGrafico>

<ModalGrafico width={30} grafico={Graficos.DOCENTES_RECOMENDADOS}>
	{#snippet encabezado()}
		<h5 class="text-lg w-full text-center mb-3 font-bold font-mono">
			{storeAnalisis.currentAsignatura ? storeAnalisis.currentAsignatura.nombre : ''}
		</h5>
	{/snippet}

	{#snippet contenido()}
		{#if storeAnalisis.currentAsignatura !== null}
			{#each storeAnalisis.currentAsignatura.recomendaciones.sort((a, b) => b.puntaje - a.puntaje) as recomendacion, i (recomendacion.docente)}
				<div class="flex justify-between hover:bg-purple-200/80 px-3 py-2 rounded-md">
					<span class="inline-flex lead text-sm">
						<strong>{i + 1}</strong><span>. {recomendacion.docente}</span>
					</span>
					<span class="inline-flex lead fw-medium text-sm">{recomendacion.puntaje}</span>
				</div>
			{/each}
		{:else}
			<p class="text-center">No hay datos para mostrar</p>
		{/if}
	{/snippet}
</ModalGrafico>

<ModalGrafico width={55} height={45} grafico={Graficos.DISTRIBUCION_CUPOS}>
	{#snippet encabezado()}
		<h5 class="text-lg w-full text-center mb-3 font-bold font-mono">
			{storeAnalisis.currentAsignatura ? storeAnalisis.currentAsignatura.nombre : ''}
		</h5>
	{/snippet}

	{#snippet contenido()}
		<canvas></canvas>
	{/snippet}
</ModalGrafico>

<!-- Horario -->
<Horario />

<section class="bg-purple-50 rounded-xl p-12">
	<h1 class="text-2xl font-bold mb-2">Prerequisitos</h1>
	<p class="text-zinc-600">
		Para poder inscribir las asignaturas de este semestre necesitas haber aprobado las siguientes
		asignaturas:
	</p>

	<ul class="pt-2">
		{#each [...new Set(Object.values(storeHorario.seleccion)
					.flatMap(({ asignatura }) => getPrerequisitos(asignatura))
					.map((prerequisito) => prerequisito.codigo + '. ' + prerequisito.nombre))] as prerequisito}
			<li class="text-zinc-600 ps-5">{prerequisito}</li>
		{/each}
	</ul>

	<div class="flex flex-col gap-2 mt-4">
		{#each Object.values(storeHorario.seleccion) as seleccion}
			<div class="bg-purple-100 rounded-lg px-5 py-4">
				<span>{seleccion.asignatura.nombre}</span>

				<ul class="pt-2">
					{#each getPrerequisitos(seleccion.asignatura) as prerequisito}
						<li class="text-zinc-600 ps-5">{prerequisito.codigo} - {prerequisito.nombre}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<Toast />

<style lang="scss">
	hr {
		opacity: 0.25;
	}
</style>
