<script>
	import '$src/styles/home.scss';
	import Hero from '$src/components/Home/Hero.svelte';
	import Nav from '$src/components/Home/Nav.svelte';
	import Footer from '$src/components/UI/Footer.svelte';
	import FeatureBadge from '$src/components/Home/FeatureBadge.svelte';
	import ShotBusqueda from "$lib/images/home/shot2.jpg";
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
				<h3 class="mt-6 text-center text-4xl font-bold lg:text-5xl lg:tracking-tight">Acerca de</h3>
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
						<FeatureBadge />

						<h3 class="mt-4 text-2xl font-medium [text-wrap:balance]">Busquedas instantaneas</h3>


						<div class="mt-4 text-slate-600 [text-wrap:balance]">
							<p>
								No más búsquedas manuales ni información desactualizada, experiencia de selección de
								asignaturas rapida e instantanea.
							</p>
	
							<ul class="list-disc mt-2 grid gap-y-2">
								<li>Selecciona las asignaturas que necesitas en un abrir
									y cerrar de ojos, sin necesidad de ingresar información manualmente y agregalas a tu
									horario.
								</li>

								<li>
									Datos en tiempo real: Los datos de asignaturas siempre están actualizados para garantizar la información más precisa, además de esto se actualizan constantemente sin necesidad de que debas recargar la página, lo que garantiza que siempre tenga acceso a la información más precisa en tiempo real.
								</li>
							</ul>
						</div>
						
					</div>
				</div>
			</div>
		</section>

		<section>
			<div class="mx-auto my-4 flex max-w-4xl flex-col items-center justify-center">
				<h3 class="mt-4 text-center text-4xl font-bold lg:text-5xl lg:tracking-tight">Features</h3>
				<p class="mt-4 text-center text-lg text-slate-600 [text-wrap:pretty]">
					Pegaso va más allá de la creación de horarios. Gracias a su conjunto de herramientas,
					ofrece una experiencia agradable y completa a los estudiantes
				</p>
			</div>

			<div class="mt-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-16">
				<div class="flex flex-col items-start gap-1 rounded-lg border p-4">
					<i class="bi bi-star"></i>
					<div>
						<h3 class="text-lg font-semibold">Titulo</h3>
						<p class="mt-2 leading-relaxed text-slate-500">Texto texto texto</p>
					</div>
				</div>

				<div class="flex flex-col items-start gap-1 rounded-lg border p-4">
					<i class="bi bi-star"></i>
					<div>
						<h3 class="text-lg font-semibold">Titulo</h3>
						<p class="mt-2 leading-relaxed text-slate-500">Texto texto texto</p>
					</div>
				</div>

				<div class="flex flex-col items-start gap-1 rounded-lg border p-4">
					<i class="bi bi-star"></i>
					<div>
						<h3 class="text-lg font-semibold">Titulo</h3>
						<p class="mt-2 leading-relaxed text-slate-500">Texto texto texto</p>
					</div>
				</div>

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

	.img-feature {
		width: 90%;
		height: auto;
		z-index: 1;
	}

	.inscribir {
		background-color: rgb(229, 206, 255);
	}
</style>
