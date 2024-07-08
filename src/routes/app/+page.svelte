<script>
	const { data } = $props();

	import { setContext } from 'svelte';
	import Nav from '$components/UI/Nav.svelte';
	import Footer from '$components/UI/Footer.svelte';
	import Blob from '$components/UI/Blob.svelte';
	import Toast from '$components/UI/Toast.svelte';
	import '$src/styles/horario.scss';

	import Seo from '$components/Seo.svelte';

	import Buscador from '$components/Buscador';
	import Horario from '$components/Horario';
	import { GraficoCupos, GraficoDistribucion, GraficoDocente } from '$components/Horario/graficos';

	import { storeAsignaturas } from '$lib/stores/asignaturas.svelte';
	storeAsignaturas.data = data.asignaturas;

	let toastInstance;
	function addToast(mensaje) {
		toastInstance.addToast(mensaje);
	}

	setContext('toast', {
		addToast
	});

	$effect(() => {
		if (storeAsignaturas.updated) {
			addToast('Cupos actualizados!');
			storeAsignaturas.updated = false;
		}
	});
</script>

<Seo />
<svelte:head>
	<title>Pegaso - App</title>
</svelte:head>

<main class="max-w-screen-2xl mx-auto px-5">
	<Nav />

	<main>
		<!-- Buscador de cursos -->
		<Buscador />

		<hr class="hr-pink" />

		<GraficoCupos />
		<GraficoDistribucion />
		<GraficoDocente />

		<!-- Horario -->
		<Horario logDescargaEvent={data.logDescargaEvent} />
	</main>

	<Footer />
	<div id="toast-container" class="toast-container fixed bottom-0 end-0 p-3"></div>

	<Toast bind:this={toastInstance} />
</main>

<style lang="scss">
	hr {
		opacity: 0.25;
	}
</style>
