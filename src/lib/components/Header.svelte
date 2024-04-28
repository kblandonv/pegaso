<script>
	import { onMount } from 'svelte';
	import Donar from './Donar.svelte';
	import { aplyTextEffect, dispatchTextEffect } from '$lib/utils/textEffect.js';

	let modal;
	function showModal() {
		modal.show();
	}

	/* Other */
	let imlargo;
	onMount(() => {
		aplyTextEffect(imlargo);

		setTimeout(() => {
    		dispatchTextEffect(imlargo);
		}, 2000);

		// Repetir cada 5 segundos
		setInterval(() => {
			dispatchTextEffect(imlargo);
		}, 7000);
	});

</script>

<header class="py-4">
	<div class="d-flex justify-content-between">
		<h1 bind:this={imlargo} id="imlargo" data-value="imlargo">imlargo</h1>

		<div class="d-flex justify-content-center align-items-center gap-5 text-lg">
			<a class="my-social" href="https://github.com/imlargo" target="_blank">
				<i class="bi bi-github"></i>
			</a>

			<a class="my-social" href="https://www.instagram.com/imlargo" target="_blank">
				<i class="bi bi-instagram"></i>
			</a>

			<a class="my-social" href="https://www.linkedin.com/in/imlargo" target="_blank">
				<i class="bi bi-linkedin"></i>
			</a>
		</div>

		<a on:click={showModal} class="btn btn-donar" role="button" href>
			<i class="bi bi-heart-fill"></i>
			<span> Donar</span>
		</a>
	</div>
</header>

<Donar bind:this={modal} />

<style lang="scss">
	#imlargo {
		font-size: 2rem;
		font-family: 'JetBrains Mono', monospace;
	}

	header {
		color: black;
		font-family: 'JetBrains Mono', monospace;
		font-size: 1rem;
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

	.btn-donar {
		background-color: #a84aff;
		color: white;
		font-weight: bold;
		transition: all 0.1s;

		&:hover {
			background-color: #8c2aff;
			color: white;
		}

		&:active {
			transform: scale(0.9);
		}
	}
</style>
