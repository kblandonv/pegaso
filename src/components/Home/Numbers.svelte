<section class="grid grid-cols-3 gap-16 rounded-full py-4">
	<div class="d-flex justify-content-center align-items-end">
		<i class="bi bi-plus text-4xl font-bold tracking-tight"></i>
		<div>
			<span class="created-by">Asignaturas</span>
			<h1 class="text-4xl font-bold tracking-tight">2.450</h1>
		</div>
	</div>

	<div class="d-flex justify-content-center align-items-end">
		<i class="bi bi-arrow-up text-4xl font-bold tracking-tight"></i>
		<div>
			<span class="created-by">Usuarios</span>
			<h1 class="text-4xl font-bold tracking-tight">1.300</h1>
		</div>
	</div>

	<div class="d-flex justify-content-center align-items-end">
		<i class="bi bi-plus text-4xl font-bold tracking-tight"></i>
		<div>
			<span class="created-by">Electivas</span>
			<h1 class="text-4xl font-bold tracking-tight">0</h1>
		</div>
	</div>
</section>

<style lang="scss">
	section {
        background-color: rgb(229, 206, 255);
    }

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

	.created-by {
		font-family: 'JetBrains Mono', monospace;
		background: linear-gradient(90deg, #9335ff 40%, #bf35ff 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
