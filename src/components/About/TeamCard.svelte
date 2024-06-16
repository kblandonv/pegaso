<div class="card-team rounded">
	<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
		<rect rx="8" ry="8" class="line" height="100%" width="100%" stroke-linejoin="round" />
	</svg>

	<div class="grid grid-cols-4 place-items-center p-5">
		<div class="col-span-1">
			<img
				src="https://avatars.githubusercontent.com/u/134282467?v=4"
				alt="imlargo"
				class="h-20 w-20 rounded-full"
			/>
		</div>

		<div class="col-span-3 ml-3">
			<h4 class="d-flex mb-2 gap-2 text-2xl">
				<i class="bi bi-terminal text-color-gradient"></i>
				<span class="font-mono">@imlargo</span>
			</h4>

			<p class="text-pretty font-mono text-slate-600">CEO, Desarrollador, Diseñador</p>

			<div class="d-flex mt-4 gap-3">
				<a href="https://www.instagram.com/imlargo" target="_blank">
					<i class="bi bi-instagram"></i>
				</a>

				<a href="https://github.com/imlargo" target="_blank">
					<i class="bi bi-github"></i>
				</a>

				<a href="https://www.linkedin.com/in/imlargo" target="_blank">
					<i class="bi bi-linkedin"></i>
				</a>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@keyframes svgAnimation {
		from {
			stroke-dashoffset: 0;
		}
		to {
			stroke-dashoffset: 1000;
		}
	}

	.card-team {
		width: 90%;
        background: linear-gradient(43deg, #ffbcfb33 0%, #ff94f838 46%, #e5c5ff27 100%);
		position: relative;

		svg {
			position: absolute;
		}

		.line {
			stroke-dasharray: 500;
			stroke-width: 0.1rem;
			fill: transparent;
			stroke: rgba(220, 46, 255, 0.15);
			animation: svgAnimation 2.5s linear infinite;
		}

		img {
			width: 9rem;
			height: auto;
		}
	}
</style>
