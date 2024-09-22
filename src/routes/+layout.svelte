<script>
	import '$styles/app.scss';
	import 'tippy.js/dist/tippy.css';
	import Nav from '$src/lib/components/layout/Nav.svelte';
	import Footer from '$src/lib/components/layout/Footer.svelte';
	import { analytics } from '$src/lib/client/firebase';
</script>

<header class="px-5 md:px-0 mx-auto container">
	<Nav />
</header>

<div class="background-dots">
	<main class="px-5 md:px-0 mx-auto container">
		<slot />
	</main>
</div>

<div class="bg-violet-500 mt-32">
	<div class="px-5 md:px-0 mx-auto container">
		<Footer />
	</div>
</div>
