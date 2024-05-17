<script>
    import {Footer, Header, TableOfContent} from "$components/About";
	import Blobl from "$components/About/Blobl.svelte";
    import "./style.scss"

	let toc;
	


	function observeAction(element) {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				const id = entry.target.getAttribute('id');
				entry.intersectionRatio > 0 ? toc.setActive(id) : toc.deleteActive(id)
			});
		});

		observer.observe(element);
    }

</script>

<svelte:head>
	<title>Pegaso | About</title>
	<meta name="description" content="Sia creado por imlargo" />
</svelte:head>

<Blobl />

<Header />

<h1 class="page_title">Acerca de</h1>
<hr />

<div class="post single">
	<div class="version_wrapper">
		<div class="version_info">
			<TableOfContent bind:this={toc} />
		</div>
	</div>
	<div class="content">

		<section id="presentation" use:observeAction>
			<h2>Presentando Pegaso 1.0</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam mi sed sem malesuada aliquet. Aliquam finibus massa nec justo convallis eleifend. Maecenas dapibus, magna et commodo euismod, lorem dolor vehicula leo, ac volutpat quam libero vitae elit. In hac habitasse platea dictumst. Maecenas id sem ac quam feugiat aliquet at nec justo. Nunc vitae ipsum et diam commodo consequat vitae id diam. Mauris mi nisl, finibus at tincidunt nec, bibendum a leo.</p>
			<p>Vivamus dictum ipsum dolor, nec facilisis libero semper tristique. Cras orci neque, laoreet et varius eu, euismod quis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet rhoncus diam. Duis ut congue lacus. Donec non pellentesque turpis. Suspendisse porttitor, mi non convallis maximus, ligula erat egestas tortor, ac posuere sem diam ac nisl. Donec efficitur vel velit vitae consequat. Sed cursus dapibus tincidunt. Nam elementum semper lorem quis pretium. In a diam at nisi fermentum interdum ac semper erat. Quisque neque magna, lacinia eget viverra quis, pharetra eu nunc.</p>
			<p>Sed ornare feugiat leo sit amet dapibus. Duis luctus ornare magna ac aliquet. Praesent tempor a odio eget pharetra. Vivamus egestas rutrum tincidunt. Nam ac posuere lorem. Proin urna sapien, auctor at vestibulum vel, mattis ac massa. Curabitur id viverra ex.</p>
		</section>

		<section id="presentation-2" use:observeAction>
			<h2>Desarrollo</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam mi sed sem malesuada aliquet. Aliquam finibus massa nec justo convallis eleifend. Maecenas dapibus, magna et commodo euismod, lorem dolor vehicula leo, ac volutpat quam libero vitae elit. In hac habitasse platea dictumst. Maecenas id sem ac quam feugiat aliquet at nec justo. Nunc vitae ipsum et diam commodo consequat vitae id diam. Mauris mi nisl, finibus at tincidunt nec, bibendum a leo.</p>
			<p>Vivamus dictum ipsum dolor, nec facilisis libero semper tristique. Cras orci neque, laoreet et varius eu, euismod quis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet rhoncus diam. Duis ut congue lacus. Donec non pellentesque turpis. Suspendisse porttitor, mi non convallis maximus, ligula erat egestas tortor, ac posuere sem diam ac nisl. Donec efficitur vel velit vitae consequat. Sed cursus dapibus tincidunt. Nam elementum semper lorem quis pretium. In a diam at nisi fermentum interdum ac semper erat. Quisque neque magna, lacinia eget viverra quis, pharetra eu nunc.</p>
			<p>Sed ornare feugiat leo sit amet dapibus. Duis luctus ornare magna ac aliquet. Praesent tempor a odio eget pharetra. Vivamus egestas rutrum tincidunt. Nam ac posuere lorem. Proin urna sapien, auctor at vestibulum vel, mattis ac massa. Curabitur id viverra ex.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam mi sed sem malesuada aliquet. Aliquam finibus massa nec justo convallis eleifend. Maecenas dapibus, magna et commodo euismod, lorem dolor vehicula leo, ac volutpat quam libero vitae elit. In hac habitasse platea dictumst. Maecenas id sem ac quam feugiat aliquet at nec justo. Nunc vitae ipsum et diam commodo consequat vitae id diam. Mauris mi nisl, finibus at tincidunt nec, bibendum a leo.</p>
			<p>Sed ornare feugiat leo sit amet dapibus. Duis luctus ornare magna ac aliquet. Praesent tempor a odio eget pharetra. Vivamus egestas rutrum tincidunt. Nam ac posuere lorem. Proin urna sapien, auctor at vestibulum vel, mattis ac massa. Curabitur id viverra ex.</p>
		</section>

        
		

	</div>
</div>

<Footer />
