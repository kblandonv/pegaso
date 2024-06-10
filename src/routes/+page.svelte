<script>
	import '$src/styles/home.scss';
	import Hero from '$src/components/Home/Hero.svelte';
	import Nav from '$src/components/Home/Nav.svelte';
	import Footer from '$src/components/UI/Footer.svelte';
	import FeatureBadge from '$src/components/Home/FeatureBadge.svelte';
	import FeatureCard from '$src/components/Home/FeatureCard.svelte';

	import ShotBusqueda from "$lib/images/home/shot-1.jpg";
	import ShotGrafico from "$lib/images/home/shot-2.jpg";
</script>

<svelte:head>
	<title>Pegaso | Buscador Cursos</title>
	<meta name="description" content="Sia creado por imlargo" />
</svelte:head>

<div class="max-w-screen-2xl mx-auto px-5">
	<Nav />

	<Hero />

	<main class="mt-7 mb-5">
		<section>
			<div class="mx-auto my-4 flex max-w-4xl flex-col items-center justify-center">
				<h3 class="mt-6 text-center text-4xl font-bold lg:text-5xl lg:tracking-tight">Más que un horario</h3>
				<p class="mt-4 text-center text-lg text-slate-600 [text-wrap:pretty]">
					Pegaso va más allá de la creación de horarios. Gracias a su conjunto de herramientas,
					ofrece una experiencia agradable y completa a los estudiantes
				</p>
			</div>

			<div>
				<div class="grid py-10 md:grid-cols-2">
					<div class="col-span-1">
						<img src={ShotBusqueda} draggable="false" class="img-feature rounded" alt="mockup">
					</div>

					<div class="col-span-1 max-w-lg">
						<FeatureBadge>Rapido y completo</FeatureBadge>

						<h3 class="mt-4 text-2xl font-medium [text-wrap:balance]">Busquedas instantaneas</h3>


						<div class="mt-4 text-slate-600 [text-wrap:balance]">
							<p>
								No más búsquedas manuales ni información desactualizada, experiencia de selección de
								asignaturas rapida e instantanea.
							</p>

							<div class="d-flex align-items-top gap-3 mt-2">
								<i class="bi bi-search-heart"></i>
								<div>
									<strong>Búsquedas Instantáneas</strong>
									<p>Realice la selección de asignaturas de manera rápida y automática. Añada materias a su horario sin necesidad de ingresar información manualmente.</p>
								</div>
							</div>

							<div class="d-flex align-items-top gap-3 mt-2">
								<i class="bi bi-cloud-check"></i>
								<div>
									<strong>Datos en Tiempo Real</strong>
									<p>Acceda a información actualizada constantemente sobre las asignaturas, sin necesidad de recargar la página.</p>
								</div>
							</div>

							<div class="d-flex align-items-top gap-3 mt-2">
								<i class="bi bi-cloud-check"></i>
								<div>
									<strong>Datos en Tiempo Real</strong>
									<p>Acceda a información actualizada constantemente sobre las asignaturas, sin necesidad de recargar la página.</p>
								</div>
							</div>

						</div>
						
					</div>
				</div>

				<div class="grid py-10 md:grid-cols-2">
					<div class="col-span-1 max-w-lg">
						<FeatureBadge>Graficos y estadisticas</FeatureBadge>

						<h3 class="mt-4 text-2xl font-medium [text-wrap:balance]">Información Completa para Decisiones Informadas</h3>


						<div class="mt-4 text-slate-600 [text-wrap:balance]">
							<p>
								Pegaso proporciona datos y estadísticas valiosas para facilitar la toma de decisiones académicas:
							</p>

							<div class="d-flex align-items-top gap-3 mt-2">
								<i class="bi bi-graph-up"></i>
								<div>
									<strong>Comportamiento de los Cupos</strong>
									<p>Analice patrones de inscripción pasados para prever la disponibilidad de cupos en las asignaturas y grupos deseados.</p>
								</div>
							</div>

							<div class="d-flex align-items-top gap-3 mt-2">
								<i class="bi bi-ui-checks"></i>
								<div>
									<strong>Recomendaciones de Docentes</strong>
									<p>Basado en análisis de datos, Pegaso sugiere los docentes más seleccionados, para asegurarse de seleccionar los mejores.</p>
								</div>
							</div>

							<div class="d-flex align-items-top gap-3 mt-2">
								<i class="bi bi-bar-chart-line"></i>
								<div>
									<strong>Distribución de Cupos</strong>
									<p>Visualice la distribución de cupos por docente en cada asignatura, ayudándole a evitar los menos seleccionados.</p>
								</div>
							</div>

						</div>
						
					</div>

					<div class="col-span-1">
						<img src={ShotGrafico} draggable="false" class="img-feature rounded" alt="mockup">
					</div>
					
				</div>

			</div>
		</section>

		<section>
			<div class="mx-auto my-4 flex max-w-4xl flex-col items-center justify-center">
				<h3 class="mt-4 text-center text-4xl font-bold lg:text-5xl lg:tracking-tight">
					<span>Diseñado</span>
					<span class="resaltado"> para ti</span>
				</h3>
				<p class="mt-4 text-center text-lg text-slate-600 [text-wrap:pretty]">
					Pegaso está diseñado para el estudiante, por lo tanto se enfoca en la facilidad de uso y la experiencia del usuario.
				</p>
			</div>

			<div class="mt-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
				
				<FeatureCard>
					<i slot="icon" class="bi bi-check-circle"></i>
					<span slot="title">Detección Inteligente de Conflictos</span>
					<span slot="content">Pegaso identifica y previene conflictos de programación. Reciba alertas claras sobre posibles solapamientos de horarios, ahorrándole tiempo y evitando frustraciones.</span>
				</FeatureCard>

				<FeatureCard>
					<i slot="icon" class="bi bi-heart"></i>
					<span slot="title">Agradable de usar</span>
					<span slot="content">Pegaso está diseñado para ser rápido, ligero e intuitivo. Con una interfaz limpia, rapida y agradable de usar, agrupado por docentes y contador de creditos</span>
				</FeatureCard>

				<FeatureCard>
					<i slot="icon" class="bi bi-save"></i>
					<span slot="title">Guardado automatico</span>
					<span slot="content">El horario seleccionado se guarda automáticamente, eliminando la necesidad de repetir búsquedas cada vez que acceda a la plataforma.</span>
				</FeatureCard>

				<FeatureCard>
					<i slot="icon" class="bi bi-clock-history"></i>
					<span slot="title">Actualizaciones en tiempo real</span>
					<span slot="content">Texto texto</span>
				</FeatureCard>

				<FeatureCard>
					<i slot="icon" class="bi bi-trophy"></i>
					<span slot="title">Rendimiento y usabilidad</span>
					<span slot="content">Texto texto</span>
				</FeatureCard>

				<FeatureCard>
					<i slot="icon" class="bi bi-graph-up"></i>
					<span slot="title">Graficos y estadisticas</span>
					<span slot="content">Texto texto</span>
				</FeatureCard>

			</div>

		</section>
	</main>


	<section class="text-center py-12 rounded inscribir">
		<h1 class="text-lg font-semibold">
			<span>Empezar a usar</span>
		</h1>
	</section>

	<Footer />
</div>

<style lang="scss">

	.resaltado {
        background: linear-gradient(90deg, #9335ff 40%, #bf35ff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
	}

	.img-feature {
		width: 90%;
		height: auto;
		z-index: 1;
	}

	.inscribir {
		background-color: rgb(229, 206, 255);
	}
</style>
