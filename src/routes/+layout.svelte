<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../styles/global.css';
</script>

<div class="app container">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	div {
		z-index: 3;
	}
</style>
