export function tooltipAction(element, mensaje, options = { placement: 'top' }) {
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
