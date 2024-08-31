<script lang="ts">
	const { data } = $props();

	import { GraficoCupos, GraficoDistribucion, GraficoDocente } from '$components/Horario/graficos';
	import { storeAsignaturas } from '$lib/stores/asignaturas.svelte';
	import { controllerFiltro } from '$lib/controllers/controllerFiltro.svelte';
	import { toastController } from '$src/lib/controllers/toastController.svelte.js';

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

<GraficoCupos />
<GraficoDistribucion />
<GraficoDocente />

<!-- Horario -->
<Horario />

<div id="toast-container" class="toast-container fixed bottom-0 end-0 p-3"></div>

<Toast />

<style lang="scss">
	hr {
		opacity: 0.25;
	}
</style>
