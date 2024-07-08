<script>
	let mensajes = $state([]);

	function toastAction(toastElement) {
		const toastInstance = bootstrap.Toast.getOrCreateInstance(toastElement);
		toastElement.addEventListener('hidden.bs.toast', () => {
			mensajes.shift();
		});

		toastInstance.show();
	}

	export function addToast(mensaje) {
		mensajes.push(mensaje);
	}
</script>

<div class="toast-container position-fixed bottom-0 end-0 p-3">
	{#each mensajes as mensaje, index (`${index}-${mensaje}`)}
		<div
			use:toastAction
			class="toast align-items-center toast-purple border-0 text-sm"
			role="alert"
		>
			<div class="d-flex">
				<div class="toast-body">{mensaje}</div>
				<button type="button" class="btn-close btn-close-black me-2 m-auto" data-bs-dismiss="toast"
				></button>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.toast-purple {
		margin-top: 1rem;
		margin-bottom: 0px;
		background-color: #e787ff52;
		color: #000000;
		z-index: 4;

		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
	}
</style>
