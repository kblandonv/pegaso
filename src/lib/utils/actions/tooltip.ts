export function tooltipAction(
	element: HTMLElement,
	mensaje: string,
	options = { placement: 'top' }
) {
	element.dataset.bsToggle = 'tooltip';
	element.dataset.bsPlacement = options.placement;
	element.dataset.bsTitle = mensaje;
	const tooltipInstance = new bootstrap.Tooltip(element);

	return {
		destroy() {
			tooltipInstance.dispose();
		}
	};
}
