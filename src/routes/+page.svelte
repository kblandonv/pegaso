<script>
	const { data } = $props();
	import Buscador from "$components/Buscador";
	import Horario from "$components/Horario";
	import { GraficoCupos, GraficoDistribucion, GraficoDocente }  from "$components/Horario/graficos";

	import { storeAsignaturas } from "$lib/stores/asignaturas.svelte.js";
	storeAsignaturas.data = data.asignaturas;

</script>

<svelte:head>
	<title>Pegaso | Buscador Cursos</title>
	<meta name="description" content="Sia creado por imlargo" />
</svelte:head>

<main>

	<!-- Buscador de cursos -->
	<Buscador horarioLocal={data.horarioLocal} />

	<hr class="hr-pink" />

	<GraficoCupos />
	<GraficoDistribucion />
	<GraficoDocente />

	<!-- Horario -->
	<Horario logDescargaEvent={data.logDescargaEvent} />

</main>

<style lang="scss">
</style>