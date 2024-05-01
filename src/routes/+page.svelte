<script>
	const { data } = $props();
	import Buscador from "../lib/components/SectionBuscador/Buscador.svelte";
	import Horario from "../lib/components/SectionHorario/Horario.svelte";
	import ModalGrafico from "$lib/components/SectionHorario/ModalGrafico.svelte";

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

	<!-- Horario -->
	<Horario logDescargaEvent={data.logDescargaEvent} />

</main>

<style lang="scss">
</style>