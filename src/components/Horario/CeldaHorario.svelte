<script>
    const { id, color, materia } = $props();
</script>

<td {id} class={`text-xs px-4 py-2 ${color ? color : "my-border"}`}>{materia}</td>

<style>

	td {
		transition: background-color 400ms;
	}

    .color-1 {
		background-color: #ffdede;
	}

	.color-2 {
		background-color: #ffb7b7;
	}

	.color-3 {
		background-color: #fff5c3;
	}

	.color-4 {
		background-color: #d1fff9;
	}

	.color-5 {
		background-color: #cfffdf;
	}

	.color-6 {
		background-color: #ffbaec;
	}

	.color-7 {
		background-color: #cbceff;
	}

	.color-8 {
		background-color: #acff9b;
	}

	.color-9 {
		background-color: #e4d5ff;
	}

	.color-10 {
		background-color: #dcb9ff;
	}

	.color-11 {
		background-color: #ffd5f5;
	}

	.color-12 {
		background-color: #f7d1ff;
	}
</style>