<script>
	import { Footer, Header, TableOfContent, Nav } from '$components/About';
	import Content from '$components/About/Content.svelte';
	import Blobl from '$components/About/Blobl.svelte';
	import '$src/styles/about.scss';

	let toc;
	function observeAction(element) {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const id = entry.target.getAttribute('id');
				entry.intersectionRatio > 0 ? toc.setActive(id) : toc.deleteActive(id);
			});
		});

		observer.observe(element);
	}
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
			<TableOfContent bind:this={toc} />
		</div>

		<Content />
		
	</div>

	<Footer />
</main>
