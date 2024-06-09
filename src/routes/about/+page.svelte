<script>
	import { Header, TableOfContent, Nav, Content } from '$components/About';
	import Footer from '$components/UI/Footer.svelte';
	import Blobl from '$components/About/Blobl.svelte';
	import '$src/styles/about.scss';
</script>

<svelte:head>
	<title>Pegaso | About</title>
	<meta name="description" content="Sia creado por imlargo" />
</svelte:head>

<main class="container-sm max-w-7xl">
	<Blobl />

	<Nav />
	<Header />

	<div class="post">
		<div class="version_wrapper">
			<TableOfContent  />
		</div>

		<Content />
	</div>

	<hr>

	<Footer />
</main>

<style lang="scss" global>
	@import 'src/styles/about.scss';
</style>