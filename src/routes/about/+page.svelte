<script>
	import '$src/styles/about.scss';
	import Nav from '$src/components/UI/Nav.svelte';
	import Footer from '$src/components/UI/Footer.svelte';
	import TeamCard from '$components/About/TeamCard.svelte';
</script>

<svelte:head>
	<title>Pegaso - About</title>
	<meta name="description" content="Sia creado por imlargo" />
</svelte:head>

<main class="container">
	<Nav />

	<header class="grid place-items-center py-5 md:grid-cols-2">
		<div class="w-100 col-span-1">
			<span class="text-color-gradient font-mono">Acerca de</span>
			<h3 class="mt-4 text-4xl font-bold [text-wrap:balance] lg:text-5xl lg:tracking-tight">
				Pensado para el estudiante.
			</h3>

			<p class="mb-2 mt-3 text-pretty text-slate-600">
				<i class="bi bi-quote"></i>
				Pegaso nació con un objetivo claro: mejorar la experiencia de inscripción y gestión de horarios
				de los estudiantes de la sede Medellín.
			</p>
		</div>

		<div class="justify-content-center col-span-1">
			<div id="blob"></div>
		</div>
	</header>

	<section class="grid grid-cols-3 gap-16 rounded-full py-4">
		<div class="d-flex justify-content-center align-items-end">
			<div>
				<span class="text-color-gradient font-mono">Asignaturas</span>
				<h1 class="text-4xl font-bold tracking-tight">3.5k</h1>
			</div>
			<i class="bi bi-plus text-4xl font-bold tracking-tight"></i>
		</div>

		<div class="d-flex justify-content-center align-items-end">
			<div>
				<span class="text-color-gradient font-mono">Usuarios</span>
				<h1 class="text-4xl font-bold tracking-tight">3k</h1>
			</div>
			<i class="bi bi-arrow-up text-4xl font-bold tracking-tight"></i>
		</div>

		<div class="d-flex justify-content-center align-items-end">
			<div>
				<span class="text-color-gradient font-mono">Electivas</span>
				<h1 class="text-4xl font-bold tracking-tight">0</h1>
			</div>
			<i class="bi bi-plus text-4xl font-bold tracking-tight"></i>
		</div>
	</section>

	<section class="grid grid-cols-2 place-items-top py-10 mt-3">
		<div class="col-span-1 w-75">
			<h3 class="text-4xl font-bold [text-wrap:balance] lg:text-5xl lg:tracking-tightww">
				Nuestra mision
			</h3>
		</div>
		<div class="justify-content-center col-span-1 w-75">
			<p class="mb-2 text-pretty text-slate-600">
				Pegaso es un proyecto personal desarrollado en su totalidad por <span class="font-mono"
					>@imlargo</span
				>. Cada línea de código y cada diseño ha sido creado con dedicación y pasión por ofrecer una
				solución que realmente haga la diferencia en la vida académica de los estudiantes.
			</p>

			<p class="mb-2 mt-3 text-pretty text-slate-600">
				Nuestra misión es transformar la manera en que los estudiantes gestionan sus horarios y
				toman decisiones académicas. Queremos que Pegaso sea más que una simple aplicación para
				crear horarios; queremos que sea una plataforma integral que facilite y enriquezca la vida
				académica de cada estudiante.
			</p>
		</div>
	</section>

	<section class="grid grid-cols-2 place-items-top py-10">
		<div class="w-100 col-span-1">
			<h3 class="text-4xl font-bold [text-wrap:balance] lg:text-5xl lg:tracking-tight">
				El Creador
			</h3>
		</div>
		<div class="justify-content-center w-75 col-span-1">
			
			<p class="mb-2 text-pretty text-slate-600">
				Pegaso es un proyecto personal desarrollado en su totalidad por <span class="font-mono"
					>@imlargo</span
				>. Cada línea de código y cada diseño ha sido creado con dedicación y pasión por ofrecer una
				solución que realmente haga la diferencia en la vida académica de los estudiantes.
			</p>

			<p class="mb-2 mt-3 text-pretty text-slate-600">
				Nuestra misión es transformar la manera en que los estudiantes gestionan sus horarios y
				toman decisiones académicas. Queremos que Pegaso sea más que una simple aplicación para
				crear horarios; queremos que sea una plataforma integral que facilite y enriquezca la vida
				académica de cada estudiante.
			</p>

			<TeamCard />
		</div>
	</section>

	

	<section class="inscribir d-flex justify-content-between align-items-center rounded px-5 py-20">
		<div class="cta">
			<h1 class="text-4xl font-bold lg:text-5xl lg:tracking-tight">
				<span>Apoya el proyecto</span>
			</h1>
			<p class="mt-3 text-lg text-slate-700 [text-wrap:pretty]">
				Si te ha gustado Pegaso y deseas contribuir al crecimiento del proyecto, considera hacer una
				donación. Tu apoyo es fundamental para mantener y mejorar la plataforma.
			</p>
		</div>

		<div class="d-flex align-items-center gap-3">
			<a
				data-sveltekit-reload
				href="/app"
				class="btn-primary rounded-full px-6 py-2.5 text-center font-medium"
			>
				<i class="bi bi-heart-fill me-1"></i>
				<span>Donar</span>
			</a>
			<a
				data-sveltekit-reload
				href="/app"
				class="btn-secondary rounded px-6 py-2.5 text-center font-medium"
			>
				<span>Ir a la App</span>
				<i class="bi bi-arrow-right ms-1"></i>
			</a>
		</div>
	</section>

	<Footer />
</main>

<style lang="scss">
		#blob {
		position: relative;
			background-color: rgb(166, 58, 255);
			height: 15vmax;
			aspect-ratio: 1;
			border-radius: 50%;
			background: linear-gradient(to right, rgb(215, 184, 255), rgb(233, 121, 255));
			opacity: 0.5;
	        z-index: -1;
	        /* blur */
	        filter: blur(120px);
	}

	.inscribir {
		background: linear-gradient(90deg, #f5ceff 0%, #e5ceff 100%);
	}

	.cta {
		width: 60%;
	}
</style>
