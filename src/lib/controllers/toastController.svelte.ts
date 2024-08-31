class ToastController {
	mensajes: string[] = $state([]);

	addMensaje(mensaje: string) {
		this.mensajes.push(mensaje);
	}

	shift() {
		this.mensajes.shift();
	}
}

export const toastController = new ToastController();
