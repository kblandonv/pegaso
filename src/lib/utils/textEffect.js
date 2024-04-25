function aplyTextEffect(element) {
    element.onmouseover = (event) => {
        dispatchTextEffect(event.target);
    };
}

function dispatchTextEffect(element) {
    let interval = null;
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
        element.innerText = element.innerText
            .split('')
            .map((letter, index) => {
                if (index < iteration) {
                    return element.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)];
            })
            .join('');

        if (iteration >= element.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
}

export { aplyTextEffect, dispatchTextEffect };
