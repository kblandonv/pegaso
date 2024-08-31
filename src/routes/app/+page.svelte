<script lang="ts">
	const { data } = $props();
	import { Graficos } from '$src/lib/utils/enums';

	import { storeAsignaturas } from '$lib/stores/asignaturas.svelte';
	import { controllerFiltro } from '$lib/controllers/controllerFiltro.svelte';
	import { toastController } from '$src/lib/controllers/toastController.svelte.js';
	import { storeAnalisis } from '$src/lib/stores/analisis.svelte';

	data.listado.then((listado) => {
		controllerFiltro.listado = listado;
	});
	data.metadata.then((metadata) => {
		storeAsignaturas.metadata = metadata;
	});

	$effect(() => {
		if (storeAsignaturas.updated) {
			toastController.addMensaje('Cupos actualizados!');
			storeAsignaturas.updated = false;
		}
	});

	import '$src/styles/horario.scss';
	import '$src/styles/action-control.scss';
	import Seo from '$components/Seo.svelte';
	import Buscador from '$components/Buscador';
	import Horario from '$components/Horario';
	import Toast from '$components/layout/Toast.svelte';
	import ModalGrafico from '$src/lib/components/layout/ModalGrafico.svelte';
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

<div id="toast-container" class="toast-container fixed bottom-0 end-0 p-3"></div>

<Toast />

<style lang="scss">
	hr {
		opacity: 0.25;
	}
</style>
