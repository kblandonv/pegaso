<script>
</script>

<section class="w-full p-10 my-7 rounded-lg">
	<slot></slot>
</section>

<style lang="scss">
	section {
		background-color: var(--container);
		border: 1px solid var(--container-stroke);
		box-shadow:
			4px 4px 4px var(--container-shadow-bottom),
			-4px -4px 4px var(--container-shadow-top);

		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
	}
</style>
