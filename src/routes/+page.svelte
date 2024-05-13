<script>
	const { data } = $props();
	import Buscador from "$components/SectionBuscador/Buscador.svelte";
	import Horario from "$components/SectionHorario/Horario.svelte";
	import ModalGrafico from "$components/SectionHorario/ModalGrafico.svelte";
	import GraficoPie from "$components/SectionHorario/GraficoPie.svelte";
	import GraficoDocente from "$components/SectionHorario/GraficoDocente.svelte";

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
	
	<!-- Buscador de cursos -->
	<Buscador asignaturas={data.asignaturas} horarioLocal={data.horarioLocal} />

	<hr class="hr-pink" />

	<ModalGrafico />
	<GraficoPie />
	<GraficoDocente />

	<!-- Horario -->
	<Horario logDescargaEvent={data.logDescargaEvent} />

</main>

<style lang="scss">
</style>