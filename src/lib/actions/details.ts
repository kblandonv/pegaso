export function detailsAction(element: HTMLElement) {
	const button = element.querySelector('#details-button') as HTMLButtonElement;
	const listado = element.querySelector('#listado') as HTMLElement;
	listado.style.maxHeight = listado.scrollHeight + 'px';

	button.addEventListener('click', function () {
		button.classList.toggle('open');

		if (listado.style.maxHeight) {
			listado.style.maxHeight = '';
		} else {
			listado.style.maxHeight = listado.scrollHeight + 'px';
		}
	});
}
