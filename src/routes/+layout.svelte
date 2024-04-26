<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Blob from '../lib/components/Misc/Blob.svelte';
	import '../styles/global.css';
</script>

<div class="app container">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />

	<div id="toast-container" class="toast-container position-fixed bottom-0 end-0 p-3">

	</div>
</div>

<style>
	div {
		z-index: 3;
	}
</style>
