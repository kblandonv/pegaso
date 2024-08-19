<span class="badge inline-flex items-center text-center rounded-full px-2 py-0.5 text-xs font-medium font-mono">
	<span class="text-center w-full"><slot></slot></span>
</span>

<style lang="scss">
	.badge {
		font-family: 'JetBrains Mono', monospace;
		height: min-content;
		width: 3rem;

		--badget-color: rgb(165, 70, 229);
		color: var(--badget-color);
		border: 1px var(--badget-color) solid;
		background-color: rgb(165, 70, 229, 0.1);

		box-shadow:
			rgb(255, 255, 255) 0px 0px 0px 0px inset,
			rgba(79, 70, 229, 0.1) 0px 0px 0px 1px inset,
			rgba(0, 0, 0, 0) 0px 0px 0px 0px;

		-webkit-font-smoothing: antialiased;
	}
</style>
