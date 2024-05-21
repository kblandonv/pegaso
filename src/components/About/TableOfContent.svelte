<script>
	let estados = $state({
		presentation: false,
		'presentation-2': false
	});

	export function setActive(id) {
		estados[id] = true;
	}

	export function deleteActive(id) {
		estados[id] = false;
	}
</script>

<section class="d-flex flex-col gap-3 pe-5">
	{#each Object.entries(estados) as entries (entries[0])}
		<div class="rounded px-2 py-1 active font-mono {entries[1] ? 'active' : ''}">
			<a href="#{entries[0]}">{entries[0]}</a>
		</div>
	{/each}
</section>

<style>
	.active {
		background-color: blueviolet;
	}

	section {
		position: sticky;
		top: 1em;
	}
</style>
