const usedColors = new Set()

export function getDataHorario(horario) {
	const dia = horario.dia.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	const inicio = parseInt(horario.inicio.split(":")[0]);
	const fin = parseInt(horario.fin.split(":")[0]);
	return {dia, inicio, fin};
}

export function getColor() {
    // Retorna un color entre 1 y 12
    const color = `color-${Math.floor(Math.random() * 11) + 1}`;
    if (usedColors.has(color) && usedColors.size < 11) {
        return getColor();
    } else {
        usedColors.add(color);
        return color;
    }
}