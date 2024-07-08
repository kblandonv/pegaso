<script>
	import { page } from '$app/stores';

	import Donar from '$components/UI/Donar.svelte';
	import { aplyTextEffect, dispatchTextEffect } from '$src/lib/utils/textEffect';

	let modal;
	function showModal() {
		modal.show();
	}

	function textEffectAction(element) {
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

<nav class="flex py-6 rounded">
	<div class="flex basis-1/3 align-center">
		<span class="text-3xl" use:textEffectAction id="imlargo" data-value="Pegaso">Pegaso</span>
	</div>

	<div class="flex basis-1/3 align-center justify-center items-center gap-12">
		<a
			class="nav-link"
			class:nav-link-active={$page.url.pathname === '/'}
			data-sveltekit-reload
			href="/"
		>
			Home
		</a>

		<a
			class="nav-link"
			class:nav-link-active={$page.url.pathname === '/app'}
			data-sveltekit-reload
			href="/app"
		>
			App
		</a>

		<a
			class="nav-link"
			class:nav-link-active={$page.url.pathname === '/about'}
			data-sveltekit-reload
			href="/about"
		>
			About
		</a>
	</div>

	<div class="flex basis-1/3 align-center justify-end items-center gap-7">
		<a class="my-social text-lg" href="https://github.com/imlargo" target="_blank">
			<i class="bi bi-github"></i>
		</a>

		<a class="my-social text-lg" href="https://www.instagram.com/imlargo" target="_blank">
			<i class="bi bi-instagram"></i>
		</a>

		<a class="my-social text-lg" href="https://www.linkedin.com/in/imlargo" target="_blank">
			<i class="bi bi-linkedin"></i>
		</a>

		<div class="h-3/5 vr my-auto"></div>

		<button
			on:click={showModal}
			class="flex px-3 py-1.5 btn-donar text-base items-center justify-center gap-2 font-medium rounded-md"
		>
			<i class="bi bi-heart-fill"></i>
			<span> Donar</span>
		</button>
	</div>
</nav>

<Donar bind:this={modal} />

<style lang="scss">
	.nav-link {
		position: relative;
		&:hover {
			color: #9335ff;
		}
	}

	.nav-link-active:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 0.1rem;
		bottom: -0.1rem;
		left: 0;
		background-color: #d3acff;
		transform-origin: bottom right;
		transform-origin: bottom left;
	}

	#imlargo {
		font-size: 2rem;
		font-family: 'JetBrains Mono', monospace;
	}

	.my-social {
		transition: all 0.2s;

		&:hover {
			transform: scale(1.15);
		}

		&:active {
			transform: scale(0.9);
		}
	}

	#imlargo {
		font-size: 2rem;
		font-family: 'JetBrains Mono', monospace;
	}

	.btn-donar {
		background-color: #a84aff;
		color: white;
		transition: all 0.1s;
		font-family: 'Inter', sans-serif !important;

		&:hover {
			transform: scale(1.02);
			background-color: #8c2aff;
			color: white;
		}

		&:active {
			transform: scale(0.9);
		}
	}
</style>
