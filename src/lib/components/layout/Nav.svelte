<script lang="ts">
	import { page } from '$app/stores';

	import Donar from '$components/UI/Donar.svelte';
	import { aplyTextEffect, dispatchTextEffect } from '$src/lib/utils/textEffect';
	import type { SvelteComponent } from 'svelte';

	let modal: SvelteComponent;
	function showModal() {
		modal.show();
	}

	function textEffectAction(element: HTMLElement) {
		aplyTextEffect(element);

		setTimeout(() => {
			dispatchTextEffect(element);
		}, 2000);

		// Repetir cada 5 segundos
		setInterval(() => {
			dispatchTextEffect(element);
		}, 7000);
	}
</script>

<nav class="grid grid-cols-3 py-8 rounded">
	<div class="flex align-center">
		<a href="/" class="flex gap-2 text-3xl font-mono">
			<i class="bi bi-calendar2-heart text-violet-500"></i>
			<span use:textEffectAction data-value="Pegaso">Pegaso</span>
		</a>
	</div>

	<div class="flex align-center justify-center items-center gap-12">
		<a
			class="relative hover:text-purple-500"
			class:nav-link-active={$page.url.pathname === '/'}
			data-sveltekit-reload
			href="/"
		>
			Home
		</a>

		<a
			class="relative hover:text-purple-500"
			class:nav-link-active={$page.url.pathname === '/app'}
			data-sveltekit-reload
			href="/app"
		>
			App
		</a>

		<a
			class="relative hover:text-purple-500"
			class:nav-link-active={$page.url.pathname === '/about'}
			data-sveltekit-reload
			href="/about"
		>
			About
		</a>
	</div>

	<div class="flex align-center justify-end items-center gap-7">
		<a
			class="transition-all duration-300 hover:scale-110 active:scale-95 text-lg"
			href="https://github.com/imlargo"
			target="_blank"
		>
			<i class="bi bi-github"></i>
		</a>

		<a
			class="transition-all duration-300 hover:scale-110 active:scale-95 text-lg"
			href="https://www.instagram.com/imlargo"
			target="_blank"
		>
			<i class="bi bi-instagram"></i>
		</a>

		<a
			class="transition-all duration-300 hover:scale-110 active:scale-95 text-lg"
			href="https://www.linkedin.com/in/imlargo"
			target="_blank"
		>
			<i class="bi bi-linkedin"></i>
		</a>

		<div class="inline-block self-stretch w-px min-h-[0.2rem] h-2/4 my-auto bg-neutral-400"></div>

		<button
			onclick={showModal}
			class="flex gap-2 bg-purple-500 text-white font-medium rounded-md px-4 py-1.5 transition-all duration-150 active:scale-95 active:bg-purple-400 hover:bg-purple-600"
		>
			<i class="bi bi-heart-fill"></i>
			<span> Donar</span>
		</button>
	</div>
</nav>

<Donar bind:this={modal} />

<style lang="scss">
	.nav-link-active:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 0.1rem;
		bottom: -0.1rem;
		left: 0;
		transform-origin: bottom right;
		transform-origin: bottom left;

		@apply bg-purple-300;
	}
</style>
