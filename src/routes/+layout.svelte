<script>
	import { setContext } from 'svelte';
	import Header from '$components/UI/Header.svelte';
	import Footer from '$components/UI/Footer.svelte';
	import Blob from '$components/UI/Blob.svelte';
	import Toast from '$components/UI/Toast.svelte';
	import '$src/styles/global.scss';

	let toastInstance;
	function addToast(mensaje) {
		toastInstance.addToast(mensaje)
	}

	setContext('toast', {
		addToast
	});
</script>

<div class="app container">
	<Header />

	<!--
	<Blob />
	-->

	<main>
		<slot />
	</main>

	<Footer />

	<div id="toast-container" class="toast-container position-fixed bottom-0 end-0 p-3">

	</div>

	<Toast bind:this={toastInstance} />
</div>

<style>
	div {
		z-index: 3;
	}
</style>
