<script>
	import '$src/styles/about.scss';
	import Nav from '$src/components/UI/Nav.svelte';
	import Footer from '$src/components/UI/Footer.svelte';
	import TeamCard from '$components/About/TeamCard.svelte';
	import Numbers from '$components/Home/Numbers.svelte';

	import FeatureBadge from '$src/components/Home/FeatureBadge.svelte';
	import FeatureCard from '$src/components/Home/FeatureCard.svelte';

	import ShotBusqueda from '$lib/images/home/shot-1.jpg';
	import ShotGrafico from '$lib/images/home/shot-2.jpg';
</script>

<svelte:head>
	<title>Pegaso - About</title>
	<meta name="description" content="Sia creado por imlargo" />
</svelte:head>

<main class="container">
	<Nav />

	<header class="mb-4 mt-3 grid place-items-center py-5 md:grid-cols-1">
		<div class="w-50 col-span-1 text-center">
			<span class="text-color-gradient font-mono">Acerca de</span>
			<h3 class="mt-2 text-3xl font-bold lg:text-4xl xl:text-6xl">Pensado para el estudiante.</h3>

			<p class="mt-4 text-pretty text-lg text-slate-600">
				Pegaso nació con un objetivo claro: mejorar la experiencia de inscripción y gestión de
				horarios de los estudiantes de la sede Medellín.
			</p>
		</div>
	</header>

	<Numbers />

	<section class="place-items-top mt-20 grid grid-cols-2 py-10">
		<div class="w-100 col-span-1">
			<span class="text-color-gradient font-mono">Nuestra mision</span>
			<h3 class="mt-4 text-balance text-4xl font-bold lg:text-5xl lg:tracking-tight">
				Transformar la experiencia de inscripción.
			</h3>
		</div>

		<div class="justify-content-center w-100 col-span-1 text-balance text-lg text-slate-600">
			<p class="mb-2">
				<i class="bi bi-quote"></i>
				La idea de Pegaso nació de la frustración común que enfrentan muchos estudiantes al inscribirse
				en sus asignaturas. Los procesos manuales, la información desactualizada y la falta de herramientas
				eficientes hacen que esta tarea sea tediosa y estresante. Pegaso se propone resolver estos problemas
				proporcionando una plataforma donde todo esté al alcance de la mano:
			</p>

			<p class="mb-2 mt-3">
				Nuestra misión es transformar la manera en que los estudiantes gestionan sus horarios y
				toman decisiones académicas. Queremos que Pegaso sea más que una simple aplicación para
				crear horarios; queremos que sea una plataforma integral que facilite y enriquezca la vida
				académica de cada estudiante.
			</p>
		</div>
	</section>


	<section class="py-10">
		<span class="text-color-gradient font-mono">El creador</span>
		<h3 class="mt-4 text-balance text-4xl font-bold lg:text-5xl lg:tracking-tight">
			Hi, imlargo!
		</h3>

		<p class="mb-2 mt-3 text-balance text-lg text-slate-600">
			Pegaso es un proyecto personal desarrollado en su totalidad por <span class="font-mono">@imlargo</span>.
		</p>


		<div class="mt-4 place-items-top grid grid-cols-2 py-10">

			<div class="col-span-1 w-100">
				<img
				src="https://avatars.githubusercontent.com/u/134282467?v=4"
					alt="imlargo"
				class="h-20 w-20 rounded my-pic"
				/>

				<h4 class="d-flex mb-2 gap-2 text-2xl">
					<i class="bi bi-terminal text-color-gradient"></i>
					<span class="font-mono">@imlargo</span>
				</h4>
	
				<p class="text-pretty font-mono text-slate-600">CEO, Desarrollador, Diseñador</p>

				<div class="d-flex mt-4 gap-3">
					<a href="https://www.instagram.com/imlargo" target="_blank">
						<i class="bi bi-instagram"></i>
					</a>
	
					<a href="https://github.com/imlargo" target="_blank">
						<i class="bi bi-github"></i>
					</a>
	
					<a href="https://www.linkedin.com/in/imlargo" target="_blank">
						<i class="bi bi-linkedin"></i>
					</a>
				</div>
			</div>

			<div class="col-span-1">
				<p class="mb-2 mt-3 text-pretty text-slate-600 text-lg">
					Cada línea de código y cada diseño ha sido creado con dedicación y pasión por ofrecer una
				   solución que realmente haga la diferencia en la vida académica de los estudiantes.
			   </p>
			   
			   <p class="mb-2 mt-3 text-pretty text-slate-600 text-lg">
				Como fundador, desarrollador frontend, desarrollador backend, diseñador, investigador y
				líder de marketing, he puesto mi visión y habilidades al servicio de los estudiantes para
				crear una herramienta única y poderosa. Cada aspecto de Pegaso, desde el diseño hasta la
				implementación, ha sido cuidadosamente desarrollado para garantizar una experiencia de
				usuario excepcional.
				</p>

			   <p class="mb-2 mt-3 text-pretty text-slate-600 text-lg">
				Como fundador, desarrollador frontend, desarrollador backend, diseñador, investigador y
				líder de marketing, he puesto mi visión y habilidades al servicio de los estudiantes para
				crear una herramienta única y poderosa. Cada aspecto de Pegaso, desde el diseño hasta la
				implementación, ha sido cuidadosamente desarrollado para garantizar una experiencia de
				usuario excepcional.
				</p>
			</div>

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
	.inscribir {
		background: linear-gradient(90deg, #f5ceff 0%, #e5ceff 100%);
	}

	.cta {
		width: 60%;
	}

	.my-pic {
		width: 550px;
		height: 550px;
	}
</style>
