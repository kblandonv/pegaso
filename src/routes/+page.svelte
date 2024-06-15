<script>
	import '$src/styles/home.scss';
	import Hero from '$src/components/Home/Hero.svelte';
	import Nav from '$src/components/UI/Nav.svelte';
	import Footer from '$src/components/UI/Footer.svelte';
	import FeatureBadge from '$src/components/Home/FeatureBadge.svelte';
	import FeatureCard from '$src/components/Home/FeatureCard.svelte';

	import ShotBusqueda from '$lib/images/home/shot-1.jpg';
	import ShotGrafico from '$lib/images/home/shot-2.jpg';
</script>

<svelte:head>
	<title>Pegaso</title>
	<meta name="description" content="Sia creado por imlargo" />
</svelte:head>

<div class="container">
	<Nav />

	<Hero />

	<main class="mb-5 mt-7">
		<section>
			<div class="mx-auto my-4 flex max-w-4xl flex-col items-center justify-center">
				<h3 class="mb-2 mt-6 text-center text-4xl font-bold lg:text-5xl lg:tracking-tight">
					Más que un horario
				</h3>
				<hr class="hr-small" />
				<p class="mt-3 text-center text-lg text-slate-600 [text-wrap:pretty]">
					Pegaso no solo te permite crear horarios, gracias a su conjunto completo de herramientas diseñadas para facilitar tu vida académica transforma tu experiencia de inscripcion.
				</p>
			</div>

			<div>
				<div class="grid place-items-center py-10 md:grid-cols-2">
					<div class="justify-content-center col-span-1">
						<img
							src={ShotBusqueda}
							draggable="false"
							class="img-feature mx-auto rounded"
							alt="mockup"
						/>
					</div>

					<div class="col-span-1 max-w-lg">
						<FeatureBadge>Rápido y sencillo</FeatureBadge>

						<h3 class="mt-3 text-2xl font-medium [text-wrap:balance]">Búsquedas instantáneas</h3>

						<div class="mt-3 text-pretty">
							<p>
								No más búsquedas manuales ni información desactualizada, disfruta una experiencia de selección de
								asignaturas instantánea.
							</p>

							<div class="d-flex align-items-top mt-3 gap-3">
								<i class="bi bi-search-heart"></i>
								<div>
									<strong>Búsquedas Instantáneas</strong>
									<p>
										Realice la selección de asignaturas de manera rápida y automática. Añada
										materias a su horario sin necesidad de ingresar información manualmente.
									</p>
								</div>
							</div>

							<div class="d-flex align-items-top mt-2 gap-3">
								<i class="bi bi-cloud-check"></i>
								<div>
									<strong>Datos en Tiempo Real</strong>
									<p>
										Acceda a información actualizada constantemente sobre las asignaturas, sin
										necesidad de recargar la página.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="grid place-items-center py-10 md:grid-cols-2">
					<div class="col-span-1 max-w-lg">
						<FeatureBadge>Gráficos y estadísticas</FeatureBadge>

						<h3 class="mt-3 text-2xl font-medium [text-wrap:balance]">
							Información Completa para Decisiones Informadas
						</h3>

						<div class="mt-3 text-pretty">
							<p>
								Pegaso proporciona datos y estadísticas valiosas para facilitar la toma de
								decisiones académicas:
							</p>

							<div class="d-flex align-items-top mt-3 gap-3">
								<i class="bi bi-graph-up"></i>
								<div>
									<strong>Comportamiento de los Cupos</strong>
									<p>
										Revisa los patrones de inscripción pasados para predecir la disponibilidad de cupos en las materias y grupos que te interesan.
									</p>
								</div>
							</div>

							<div class="d-flex align-items-top mt-2 gap-3">
								<i class="bi bi-ui-checks"></i>
								<div>
									<strong>Recomendaciones de Docentes</strong>
									<p>
										Basado en análisis de datos, Pegaso te sugiere los docentes más seleccionados, para que elijas a los mejores.
									</p>
								</div>
							</div>

							<div class="d-flex align-items-top mt-2 gap-3">
								<i class="bi bi-bar-chart-line"></i>
								<div>
									<strong>Distribución de Cupos</strong>
									<p>
										Visualiza la distribución de cupos por docente en cada asignatura, ayudándole a
										evitar los menos seleccionados.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div class="justify-content-center col-span-1">
						<img
							src={ShotGrafico}
							draggable="false"
							class="img-feature mx-auto rounded"
							alt="mockup"
						/>
					</div>
				</div>
			</div>
		</section>

		<section>
			<div class="mx-auto my-4 flex max-w-4xl flex-col items-center justify-center">
				<h3 class="mb-2 mt-4 text-center text-4xl font-bold lg:text-5xl lg:tracking-tight">
					<span>Diseñado</span>
					<span class="resaltado"> para ti</span>
				</h3>
				<hr class="hr-small" />
				<p class="mt-3 text-center text-lg text-slate-600 [text-wrap:pretty]">
					Pegaso ha sido creado para el estudiante, ofreciendo una experiencia intuitiva y herramientas útiles que transforman y simplifican tu inscripcion de asignaturas.
				</p>
			</div>

			<div class="mt-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
				<FeatureCard>
					<i slot="icon" class="bi bi-check-circle"></i>
					<span slot="title">Detección Inteligente de Conflictos</span>
					<span slot="content">Pegaso identifica y previene conflictos entre asignaturas en tu horario, ahorrándote tiempo y evitando frustraciones.</span>
				</FeatureCard>

				<FeatureCard>
					<i slot="icon" class="bi bi-heart"></i>
					<span slot="title">Agradable de usar</span>
					<span slot="content">Disfruta de funcionalidades diseñadas para ti, como la agrupación de grupos por docentes y un contador de créditos.</span>
				</FeatureCard>

				<FeatureCard>
					<i slot="icon" class="bi bi-save"></i>
					<span slot="title">Guardado automático</span>
					<span slot="content">Tu horario se guarda automáticamente, eliminando la necesidad de repetir búsquedas cada vez que accedes a la aplicación.</span>
				</FeatureCard>

				<FeatureCard>
					<i slot="icon" class="bi bi-clock-history"></i>
					<span slot="title">Actualizaciones en tiempo real</span>
					<span slot="content">Accede a información actualizada constantemente sobre las asignaturas, sin necesidad de recargar la página.</span>
				</FeatureCard>

				<FeatureCard>
					<i slot="icon" class="bi bi-trophy"></i>
					<span slot="title">Rendimiento y usabilidad</span>
					<span slot="content"
						>Pegaso es intuitivo y fácil de usar, además de ser robusto y rápido. Cuenta con una interfaz limpia, y agradable.</span>
				</FeatureCard>

				<FeatureCard>
					<i slot="icon" class="bi bi-graph-up"></i>
					<span slot="title">Gráficos y estadísticas</span>
					<span slot="content">Obtén datos y estadísticas valiosas para tomar decisiones académicas informadas.</span>
				</FeatureCard>
			</div>
		</section>
	</main>

	<section class="inscribir d-flex justify-content-between align-items-center rounded px-5 py-20">
		<div class="cta">
			<h1 class="text-4xl font-bold lg:text-5xl lg:tracking-tight">
				<span>¿Listo para empezar?</span>
			</h1>
			<p class="mt-3 text-lg text-slate-700 [text-wrap:pretty]">
				Pegaso es un proyecto personal desarrollado en su totalidad por una sola persona.<br />Si te
				ha gustado, considera hacer una donación. Tu apoyo contribuye al proyecto :3
			</p>
		</div>

		<div class="d-flex align-items-center gap-3">
			<a data-sveltekit-reload href="/app" class="btn-primary rounded-full px-6 py-2.5 text-center font-medium">
				<i class="bi bi-heart-fill me-1"></i>
				<span>Donar</span>
			</a>
			<a data-sveltekit-reload href="/app" class="btn-secondary rounded px-6 py-2.5 text-center font-medium">
				<span>Ir a la App</span>
				<i class="bi bi-arrow-right ms-1"></i>
			</a>
		</div>
	</section>

	<Footer />
</div>

<style lang="scss">
	.btn-primary {
		background: linear-gradient(90deg, #a85cff 40%, rgba(198, 92, 255, 1) 100%);
		color: white;

		&:hover {
			background: #983fff;
		}
	}

	.resaltado {
		background: linear-gradient(90deg, #9335ff 40%, #bf35ff 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.img-feature {
		width: 40.5rem;
		height: auto;
		z-index: 1;
	}

	.hr-small {
		width: 35%;
		height: 0.25rem;
		background: linear-gradient(90deg, #9335ff 40%, #bf35ff 100%);
		border: none;
	}

	.inscribir {
		background: linear-gradient(90deg, #f5ceff 0%, #e5ceff 100%);
	}

	.cta {
		width: 60%;
	}
</style>
