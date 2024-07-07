import { utils, write } from 'xlsx';
import Chart from 'chart.js/auto';

let usedChart = null;
let usedRecomendado = null;

const usedColors = new Set();

export function ArrayToExcel(array, fileName = 'Horario') {
	const fileType =
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
	const fileExtension = '.xlsx';
	const workSheet = utils.aoa_to_sheet(array);
	const workBook = {
		Sheets: { data: workSheet, cols: [] },
		SheetNames: ['data']
	};
	const excelBuffer = write(workBook, { bookType: 'xlsx', type: 'array' });
	const fileData = new Blob([excelBuffer], { type: fileType });
	const blobUrl = URL.createObjectURL(fileData);
	const link = document.createElement('a');
	link.href = blobUrl;
	link.download = fileName + fileExtension;
	link.dispatchEvent(
		new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
			view: window
		})
	);
}

export function normalizeString(s) {
	return s
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '');
}

export function parseHorario(horario) {
	const dia = horario.dia
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '');
	const inicio = parseInt(horario.inicio.split(':')[0]);
	const fin = parseInt(horario.fin.split(':')[0]);
	return { dia, inicio, fin };
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

export function createGraph(canvas, asignatura, grupo) {
	if (!asignatura) return;

	if (usedChart) {
		usedChart.destroy();
	}

	const total = asignatura.total;
	const labels = Object.keys(total);

	const datasetTotal = {
		label: 'Cupos totales',
		backgroundColor: '#B346FF',
		borderColor: 'rgb(85, 60, 144, 0.5)',
		color: '#ffffff',
		data: Object.values(total)
	};
	const datasetGrupo = grupo
		? {
				label: `Cupos ${grupo.grupo}`,
				backgroundColor: '#FF6B97',
				borderColor: 'rgb(233, 124, 156, 0.6)',
				color: '#ffffff',
				data: Object.values(asignatura.grupos[grupo.grupo].cupos)
			}
		: false;

	const data = {
		labels: labels,
		datasets: grupo ? [datasetTotal, datasetGrupo] : [datasetTotal]
	};

	const config = {
		type: 'line',
		data: data,
		options: {
			animation: false,
			indexAxis: 'x',
			scales: {
				y: {
					min: 0
				}
			}
		}
	};

	usedChart = new Chart(canvas, config);
}

export function createGraphRecomendado(canvas, asignatura) {
	if (!asignatura) return;

	if (usedRecomendado) {
		usedRecomendado.destroy();
	}

	const recomendado = asignatura.recomendaciones.sort((a, b) => b.inscritos - a.inscritos);

	const data = {
		labels: recomendado.map((docente) => docente.docente),
		datasets: [
			{
				label: 'Cupos inscritos',
				data: recomendado.map((docente) => docente.inscritos),
				hoverOffset: 4
			}
		]
	};

	const config = {
		type: 'doughnut',
		data: data,
		options: {
			animation: false
		}
	};

	usedRecomendado = new Chart(canvas, config);
}
