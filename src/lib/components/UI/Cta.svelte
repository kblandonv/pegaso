<section class="w-full h-full px-5 py-12 md:py-24 rounded-2xl overflow-hidden">
	<h1 class="text-3xl md:text-5xl md:w-4/12 text-center font-bold mb-4 mx-auto text-white">
		¿Listo para empezar?
	</h1>

	<p class="text-purple-100 md:text-xl text-center md:w-7/12 mx-auto text-pretty">
		Pegaso es un proyecto personal desarrollado en su totalidad por una sola persona. Si te ha
		gustado, considera hacer una donación para apoyar el proyecto. :3
	</p>

	<div class="flex justify-center mt-12">
		<a
			href="/app"
			class="inline-flex items-center justify-center gap-2 text-purple-500 font-semibold rounded-lg bg-white hover:bg-purple-400 hover:text-white transition-all duration-300 py-3 px-14"
			data-sveltekit-reload
		>
			<span>Empezar</span>
			<i class="inline-flex bi bi-arrow-right leading-none text-lg"></i>
		</a>
	</div>
</section>

<style lang="scss">
	section {
		position: relative;

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;

			z-index: -2;
			background-color: #a855f7;
		}

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			--size: 11px;
			--color: #c084fc;

			z-index: -1;

			background: #a855f7 radial-gradient(var(--color) 10%, transparent 1%);
			background-size: var(--size) var(--size);
			mask-image: radial-gradient(circle, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 1) 100%);
		}
	}
</style>
