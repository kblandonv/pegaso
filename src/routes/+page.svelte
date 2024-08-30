<script>
	import FeatureBadge from '$components/Home/FeatureBadge.svelte';
	import FeatureCard from '$components/Home/FeatureCard.svelte';

	import ShotBusqueda from '$lib/images/home/shot-1.jpg';
	import ShotGrafico from '$lib/images/home/shot-2.jpg';
	import Seo from '$components/Seo.svelte';

	import Cta from '$src/lib/components/UI/Cta.svelte';

	import Mockup from '$lib/images/mockup.png';

	import Stats from '$src/lib/components/UI/Stats.svelte';
</script>

<Seo />
<svelte:head>
	<title>Pegaso</title>
</svelte:head>

<section class="grid lg:grid-cols-4 place-items-center relative py-10">
	<div class="col-span-2 w-full">
		<span class="inline-flex font-mono text-gradient mb-4 font-medium">By: @imlargo</span>

		<h1 class="font-medium text-4xl md:text-7xl md:w-9/12 mb-4">
			Crea tu horario con <span class="text-gradient">Pegaso</span>
		</h1>

		<p class="text-lg mt-5 max-w-2xl text-zinc-600 text-start">
			Una aplicación diseñada para la creación de horarios y enfocada en brindar información
			esencial con el objetivo de mejorar la experiencia de los estudiantes de la Universidad
			Nacional de Colombia sede Medellín.
		</p>

		<div class="flex gap-8 mt-12">
			<a
				data-sveltekit-reload
				href="/app"
				class="rounded-lg px-6 py-2.5 font-medium text-center bg-gradient text-white"
				>Empieza ahora</a
			>
			<a
				data-sveltekit-reload
				href="/about"
				class="px-4 md:px-6 py-2.5 rounded-lg bg-violet-100 flex gap-2 text-zinc-600 transition-all duration-300"
				>Leer más <i class="bi bi-arrow-right"></i></a
			>
		</div>
	</div>

	<div class="col-span-2 w-full">
		<img src={Mockup} draggable="false" class="mockup" alt="mockup" />
	</div>
</section>

<div class="my-12">
	<Stats />
</div>

<section class="my-24">
	<div class="mx-auto my-4 flex max-w-4xl flex-col items-center justify-center">
		<h2 class="text-5xl text-center font-semibold my-4">Más que un horario</h2>

		<div class="divider"></div>
		<p class="mt-4 text-center text-lg text-zinc-600 text-pretty w-10/12">
			Pegaso no solo te permite crear horarios, sino que transforma tu experiencia de inscripción
			gracias a su conjunto completo de herramientas.
		</p>
	</div>

	<div>
		<div class="grid place-items-center py-10 md:grid-cols-2">
			<div class="justify-center col-span-1">
				<img
					src={ShotBusqueda}
					draggable="false"
					class="img-feature mx-auto rounded"
					alt="mockup"
				/>
			</div>

			<div class="col-span-1 max-w-lg">
				<FeatureBadge>Rápido y sencillo</FeatureBadge>

				<h3 class="my-4 text-2xl font-medium [text-wrap:balance]">Búsquedas instantáneas</h3>

				<div class="text-pretty">
					<p>
						Olvidate de las búsquedas manuales y la información desactualizada. Experimenta una
						selección de asignaturas rapida.
					</p>

					<div class="flex items-top mt-5 gap-3">
						<i class="bi bi-search-heart text-purple-500"></i>
						<div>
							<strong>Búsquedas Instantáneas</strong>
							<p>
								Encuentra y selecciona asignaturas rápidamente, sin búsquedas manuales ni
								información desactualizada.
							</p>
						</div>
					</div>

					<div class="flex items-top mt-2 gap-3">
						<i class="bi bi-cloud-check text-purple-500"></i>
						<div>
							<strong>Datos en Tiempo Real</strong>
							<p>
								Accede a información actualizada sobre las asignaturas, sin necesidad de recargar la
								página.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="grid place-items-center py-10 md:grid-cols-2">
			<div class="col-span-1 max-w-lg">
				<FeatureBadge>Gráficos y estadísticas</FeatureBadge>

				<h3 class="my-4 text-2xl font-medium [text-wrap:balance]">
					Información Completa para Decisiones Informadas
				</h3>

				<div class="text-pretty">
					<p>
						Pegaso proporciona datos y estadísticas valiosas para facilitar la toma de decisiones
						académicas:
					</p>

					<div class="flex items-top mt-5 gap-3">
						<i class="bi bi-graph-up text-purple-500"></i>
						<div>
							<strong>Comportamiento de los Cupos</strong>
							<p>
								Revisa los patrones de inscripción pasados para predecir la disponibilidad de cupos
								en las materias y grupos que te interesan.
							</p>
						</div>
					</div>

					<div class="flex items-top mt-2 gap-3">
						<i class="bi bi-ui-checks text-purple-500"></i>
						<div>
							<strong>Recomendaciones de Docentes</strong>
							<p>
								Basado en análisis de datos, Pegaso te sugiere los docentes más seleccionados, para
								que elijas a los mejores.
							</p>
						</div>
					</div>

					<div class="flex items-top mt-2 gap-3">
						<i class="bi bi-bar-chart-line text-purple-500"></i>
						<div>
							<strong>Distribución de Cupos</strong>
							<p>
								Visualiza la distribución de cupos por docente para evitar los menos seleccionados.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="justify-center col-span-1">
				<img src={ShotGrafico} draggable="false" class="img-feature mx-auto rounded" alt="mockup" />
			</div>
		</div>
	</div>
</section>

<section class="my-24">
	<div class="mx-auto flex max-w-4xl flex-col items-center justify-center">
		<h2 class="text-5xl text-center font-semibold my-4">
			<span>Diseñado</span>
			<span class="resaltado"> para ti</span>
		</h2>

		<div class="divider"></div>

		<p class="mt-4 text-center text-lg text-zinc-600 text-pretty w-10/12">
			Pegaso ha sido creado para el estudiante, ofreciendo una experiencia intuitiva y herramientas
			útiles que mejoran y simplifican tu inscripcion de asignaturas.
		</p>
	</div>

	<div class="mt-14 grid gap-12 sm:grid-cols-2 md:grid-cols-3">
		<FeatureCard icon="bi bi-check-circle">
			<span slot="title">Detección Inteligente de Conflictos</span>
			<span slot="content"
				>Pegaso identifica y previene conflictos entre asignaturas en tu horario, ahorrándote tiempo
				y evitando frustraciones.</span
			>
		</FeatureCard>

		<FeatureCard icon="bi bi-heart">
			<span slot="title">Agradable de usar</span>
			<span slot="content"
				>Disfruta de funcionalidades diseñadas para ti, como la agrupación de grupos por docentes y
				un contador de créditos.</span
			>
		</FeatureCard>

		<FeatureCard icon="bi bi-save">
			<span slot="title">Guardado automático</span>
			<span slot="content"
				>Tu horario se guarda automáticamente, eliminando la necesidad de repetir búsquedas cada vez
				que accedes a la aplicación.</span
			>
		</FeatureCard>

		<FeatureCard icon="bi bi-clock-history">
			<span slot="title">Actualizaciones en tiempo real</span>
			<span slot="content"
				>Accede a información actualizada constantemente sobre las asignaturas, sin necesidad de
				recargar la página.</span
			>
		</FeatureCard>

		<FeatureCard icon="bi bi-trophy">
			<span slot="title">Rendimiento y usabilidad</span>
			<span slot="content"
				>Pegaso es intuitivo y fácil de usar, además de ser robusto y rápido. Cuenta con una
				interfaz limpia, y agradable.</span
			>
		</FeatureCard>

		<FeatureCard icon="bi bi-graph-up">
			<span slot="title">Gráficos y estadísticas</span>
			<span slot="content"
				>Obtén datos y estadísticas valiosas para tomar decisiones académicas informadas.</span
			>
		</FeatureCard>
	</div>
</section>

<section class="my-24">
	<Cta />
</section>

<style lang="scss">
	.divider {
		@apply w-4/12 h-1 bg-violet-400 rounded-full;
	}

	.mockup {
		filter: drop-shadow(rgb(224, 197, 255) 0.5rem 0.5rem 1rem);
	}

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
		opacity: 0.25;
		border: none;
	}

	.inscribir {
		background: linear-gradient(90deg, #f5ceff 0%, #e5ceff 100%);
	}

	.cta {
		width: 60%;
	}
</style>
