<script>
    let { message } = $props();

    let toastElement;
    let toastInstance;

    $effect(() => {
        const toastContainer = document.getElementById("toast-container");
        toastContainer.appendChild(toastElement);

        const toastInstance = bootstrap.Toast.getOrCreateInstance(toastElement);
        toastElement.addEventListener('hidden.bs.toast', () => {
            toastElement.remove();
        })

        toastInstance.show();
    });

    export function show() {
        toastInstance.show();
    }
</script>

<div class="toast align-items-center my-toast border-0" role="alert" bind:this={toastElement}>
	<div class="d-flex">
		<div class="toast-body"><span>{message}</span></div>
		<button
			type="button"
			class="btn-close btn-close-white me-2 m-auto"
			data-bs-dismiss="toast"
			aria-label="Close"
		></button>
	</div>
</div>