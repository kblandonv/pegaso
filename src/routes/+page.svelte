<script>
	const { data } = $props();
	import Buscador from "../lib/components/SectionBuscador/Buscador.svelte";
	import Horario from "../lib/components/SectionHorario/Horario.svelte";

	import { getAsignaturas } from '../lib/stores/asignaturas.svelte.js';
	let asignaturas = getAsignaturas();
	asignaturas.asignar(data.loadedData);
	
</script>

<svelte:head>
	<title>imlargo - Buscador Cursos</title>
	<meta name="description" content="Sia creado por imlargo" />
</svelte:head>

<main>
	<!-- Buscador de cursos -->
	<Buscador/>

	<hr class="hr-pink" />

	<!-- Horario -->
	<Horario />

</main>

<style lang="scss">
</style>