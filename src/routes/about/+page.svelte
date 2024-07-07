<script>
	import '$src/styles/about.scss';
	import Nav from '$components/UI/Nav.svelte';
	import Footer from '$components/UI/Footer.svelte';
	import Numbers from '$components/Home/Numbers.svelte';
	import Seo from '$components/Seo.svelte';
</script>

<Seo />
<svelte:head>
	<title>Pegaso - About</title>
</svelte:head>

<main class="max-w-screen-2xl mx-auto px-5">
	<Nav />

	<header class="py-24 grid place-items-center md:grid-cols-1">
		<div class="w-1/2 col-span-1 text-center">
			<span class="text-color-gradient font-mono">Acerca de</span>
			<h3 class="mt-2 text-3xl font-bold lg:text-4xl xl:text-6xl">Pensado para el estudiante.</h3>

			<p class="mt-4 text-pretty text-lg text-slate-600">
				Pegaso nació con un objetivo claro: mejorar la experiencia de inscripción y gestión de
				horarios de los estudiantes de la sede Medellín.
			</p>
		</div>
	</header>

	<Numbers />

	<section class="place-items-top mt-24 grid grid-cols-2 py-10">
		<div class="w-100 col-span-1">
			<span class="text-color-gradient font-mono">Más que un horario</span>
			<h3 class="mt-4 text-balance text-4xl font-bold lg:text-5xl lg:tracking-tight">
				Transformando la Experiencia de Inscripcion
			</h3>
		</div>

		<div class="justify-center w-100 col-span-1 text-balance text-lg text-slate-700">
			<p class="mb-2">
				<i class="bi bi-quote"></i>
				Pegaso surgió como una solución dirigida a estudiantes que, al igual que yo, enfrentan el caos
				de planear su horario e inscribir asignaturas. Los procesos manuales, la información desactualizada
				y la falta de herramientas eficientes convierten esta tarea en algo tedioso y estresante.
			</p>

			<p class="mb-2 mt-3">
				Con la motivación de mejorar esta experiencia, comencé a desarrollar lo que hoy es Pegaso.
				Más allá de ser una herramienta para organizar horarios, mi objetivo es brindar una solución
				que realmente marque la diferencia en la experiencia de los estudiantes, y sobre todo, que
				satisfaga la necesidad de tener información útil y de primera mano que facilite la toma de
				decisiones.
			</p>

			<p class="mb-2 mt-3">
				Actualmente, Pegaso ha experimentado un rápido crecimiento con más de 1.300 usuarios
				participando en su fase inicial, y seguira en constante evolucion, comprometido con la
				mejora continua a través del feedback de los usuarios, la incorporación de nuevas
				funcionalidades y continuando con el objetivo de simplificar el proceso de inscripción y
				facilitar la creación de horarios para los estudiantes.
			</p>
		</div>
	</section>

	<hr class="mx-auto w-1/2" />

	<section class="mt-20">
		<span class="text-color-gradient font-mono">Sobre mí</span>
		<h3 class="mt-4 text-balance text-4xl font-bold lg:text-5xl lg:tracking-tight">Hi, imlargo!</h3>

		<div class="place-items-top mt-1 grid grid-cols-2 py-10">
			<div class="w-full col-span-1">
				<img
					src="https://media.licdn.com/dms/image/D4E03AQH8qCs5Z5PqaA/profile-displayphoto-shrink_800_800/0/1697915419824?e=1724889600&v=beta&t=11qxae0A7GBis-cdKjuA-WWnfweJ59mh2Up1kNg6PAs"
					alt="imlargo"
					class="rounded-2xl my-pic mb-4 h-20 w-20"
				/>

				<h4 class="flex mb-2 gap-2 text-2xl">
					<i class="bi bi-terminal text-color-gradient"></i>
					<span class="font-mono font-medium">Juan Carlos Largo.</span>
				</h4>

				<p class="text-pretty font-mono text-lg text-slate-600">
					Fundador, Desarrollador, Diseñador UI/UX.
				</p>

				<div class="flex mt-3 gap-7 text-lg">
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

			<div class="col-span-1 text-pretty text-lg text-slate-700">
				<p class="mb-2">
					¡Hola! Soy Juan Carlos Largo, el creador de Pegaso. Diseñé y desarrollé esta aplicación
					por mi cuenta, inspirado tanto en mi experiencia como estudiante como en mi pasión por el
					desarrollo de software. Como dato curioso me encantan los colores rosa y morado, y es por
					eso que decidí dejar ese toque en toda la web, ademas, siento que transmiten la sensación
					agradable que buscaba con la aplicacion.
				</p>

				<p class="mb-2 mt-3">
					Inicialmente, Pegaso surgió como un proyecto personal y un hobby. Sin embargo, gracias a
					la respuesta positiva de quienes lo probaron y al ver cómo realmente beneficiaba a los
					estudiantes, decidí que era necesario brindar una solucion, por lo que continúe trabajando
					y mejorando el proyecto, siempre asegurandome de que la aplicación no solo funcionara
					correctamente, sino que también fuera intuitiva y agradable de usar. Cada aspecto de
					Pegaso refleja mi dedicación, cariño y esfuerzo.
				</p>

				<p class="mb-2 mt-3">
					Si quieres saber más acerca de mí, actualmente estoy estudiando Ingeniería de Sistemas en
					la sede de Medellín, disfruto dedicando mi tiempo a programar, escuchar música, aprender
					cosas nuevas y nadar.
				</p>
			</div>
		</div>
	</section>

	<section class="inscribir flex justify-between items-center rounded px-12 py-20">
		<div class="cta">
			<h1 class="text-4xl font-bold lg:text-5xl lg:tracking-tight">
				<span>Apoya el proyecto</span>
			</h1>
			<p class="mt-5 text-lg text-slate-700 [text-wrap:pretty]">
				Si te ha gustado Pegaso y deseas contribuir al crecimiento del proyecto, considera hacer una
				donación. Tu apoyo es fundamental para mantener y mejorar la plataforma.
			</p>
		</div>

		<div class="flex items-center gap-3">
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

	hr {
		height: 0.25rem;
		background-color: #f5ceff;
		border: none;
		opacity: 0.25;
	}
</style>
