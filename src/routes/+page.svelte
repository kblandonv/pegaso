<script>
	const { data } = $props();
	import Buscador from "$components/Buscador";
	import Horario from "$components/Horario";

	import GraficoCupos from "$components/Horario/graficos/GraficoCupos.svelte";
	import GraficoDistribucion from "$components/Horario/graficos/GraficoDistribucion.svelte";
	import GraficoDocente from "$components/Horario/graficos/GraficoDocente.svelte";
	import { loadAsignaturas } from "$lib/utils/loadAsignaturas";

	let asignaturas = $state(data.asignaturas);
	
	async function reloadAsignaturas() {
		asignaturas = await loadAsignaturas();
	}

	/*
		- Agregar guardar horario en local
		- Agregar ver grafico
	*/
</script>

<svelte:head>
	<title>imlargo - Buscador Cursos</title>
	<meta name="description" content="Sia creado por imlargo" />
</svelte:head>

<main>

	<button onclick={reloadAsignaturas} type="button">Actualizar</button>
	
	<!-- Buscador de cursos -->
	<Buscador asignaturas={asignaturas} horarioLocal={data.horarioLocal} />

	<hr class="hr-pink" />

	<GraficoCupos />
	<GraficoDistribucion />
	<GraficoDocente />

	<!-- Horario -->
	<Horario logDescargaEvent={data.logDescargaEvent} />

</main>

<style lang="scss">
</style>