<script>
	let blobElement;

	$effect(() => {
		window.onpointermove = (event) => {
			const { clientX, clientY } = event;

			blobElement.animate(
				{
					left: `${clientX}px`,
					top: `${clientY}px`
				},
				{ duration: 3000, fill: 'forwards' }
			);
		};
	});
</script>

<div bind:this={blobElement}></div>

<style lang="scss">
	@keyframes rotate {
		from {
			rotate: 0deg;
		}

		50% {
			scale: 1 1.5;
		}

		to {
			rotate: 360deg;
		}
	}

	div {
		background-color: white;
		height: 34vmax;
		aspect-ratio: 1;
		position: absolute;
		left: 50%;
		top: 50%;
		translate: -50% -50%;
		border-radius: 50%;

		background: linear-gradient(to right, rgba(205, 187, 255), rgba(249, 207, 255));
		animation: rotate 20s infinite;
		opacity: 1;
		filter: blur(20px);

		z-index: -1;

		transition: all 0.5s;
	}
</style>
