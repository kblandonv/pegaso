function aplyTextEffect(element: HTMLElement) {
	element.onmouseover = (event) => {
		dispatchTextEffect(event.target as HTMLElement);
	};
}

function dispatchTextEffect(element: HTMLElement) {
	let interval: NodeJS.Timeout | null = null;
	const letters = 'abcdefghijklmnopqrstuvwxyz';

	let iteration = 0;
	clearInterval(interval as unknown as NodeJS.Timeout);
	interval = setInterval(() => {
		element.innerText = element.innerText
			.split('')
			.map((letter, index) => {
				if (index < iteration && element.dataset?.value) {
					return element.dataset?.value[index];
				}

				return letters[Math.floor(Math.random() * 26)];
			})
			.join('');

		if (element.dataset?.value && iteration >= element.dataset.value.length) {
			clearInterval(interval as unknown as NodeJS.Timeout);
		}

		iteration += 1 / 3;
	}, 30);
}

export { aplyTextEffect, dispatchTextEffect };
