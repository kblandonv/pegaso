<script>
	let dialog;

	function hide() {
		dialog.close();
	}

	export function show() {
		dialog.show();
	}

	import Qr from '$lib/images/qr.png';
</script>

<dialog bind:this={dialog} class="p-4">
	<form method="dialog">
		<p class="text-lg font-medium text-center">Qr nequi.</p>
		<img src={Qr} draggable="false" class="m-3" alt="qr" />
		<div class="flex justify-center">
			<button on:click={hide} type="submit" class="btn"><i class="bi bi-check-lg"></i></button>
		</div>
	</form>
</dialog>

<style lang="scss">
	@keyframes fadein {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	dialog {
		z-index: 5;
		background: rgba(237, 164, 255, 0.2);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		position: absolute;
		top: 4rem;
		left: 50%;
		transition: all 0.5s ease;

		&[open] {
			animation: fadein 120ms ease forwards;
		}

		p {
			font-family: 'JetBrains Mono', monospace;
		}

		img {
			width: 20rem;
			height: auto;
		}

		button {
			background-color: #b26eff;
			color: white;
			font-weight: bold;
			text-align: center;

			width: 2.5rem;
			height: 2.5rem;
			border-radius: 50%;

			display: flex;
			justify-content: center;
			align-items: center;

			&:hover {
				background-color: #9345ff;
				color: white;
			}
		}
	}
</style>
