<script>
	function blobAction(blob) {
		window.onpointermove = (event) => {
			const { clientX, clientY } = event;

			blob.animate(
				{
					left: `${clientX}px`,
					top: `${clientY}px`
				},
				{ duration: 3000, fill: 'forwards' }
			);
		};
	}
</script>

<div use:blobAction id="blob"></div>

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

	#blob {
		background-color: white;
		height: 15vmax;
		aspect-ratio: 1;
		position: absolute;
		left: 50%;
		top: 50%;
		translate: -50% -50%;
		border-radius: 50%;
		background: linear-gradient(to right, aquamarine, mediumpurple);
		animation: rotate 20s infinite;
		opacity: 0.3;

        z-index: -1;

        /* blur */
        filter: blur(120px);
        
	}
</style>
