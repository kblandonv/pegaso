<script>
	import Footer from '$components/About/Footer.svelte';
	import Header from '$components/About/Header.svelte';
	import TableOfContent from '$components/About/TableOfContent.svelte';
	import Nav from '$components/About/Nav.svelte';
	import Content from '$components/About/Content.svelte';
	import Blobl from '$components/About/Blobl.svelte';
	import '$src/styles/about.scss';
</script>

<svelte:head>
	<title>Pegaso | About</title>
	<meta name="description" content="Sia creado por imlargo" />
</svelte:head>

<main class="container-sm max-w-5xl">
	<Blobl />

	<Nav />
	<Header />

	<div class="post">
		<div class="version_wrapper">
			<TableOfContent  />
		</div>

		<Content />
	</div>

	<Footer />
</main>

<style lang="scss">
	@import '../../styles/about.scss';
</style>
