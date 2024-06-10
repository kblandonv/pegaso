<nav class="row py-4 rounded">

	<div class="col-4">
		<h1  id="imlargo" data-value="imlargo">Pegaso</h1>
	</div>

	<div class="col-4 d-flex justify-content-center align-items-center gap-5 text-lg">
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

    <div class="col-4 d-flex justify-content-end align-items-center gap-5 ">
        <a href="/app" class="link-app">
            App
        </a>

        <a href="/about">
            Blog
        </a>

        <a href="/about">
            About
        </a>
    </div>
</nav>

<style lang="scss">

	.link-app {
        color: #9335ff;
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
</style>
