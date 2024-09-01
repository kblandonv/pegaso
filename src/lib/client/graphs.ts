import Chart, { type ChartDataset, type ChartDatasetCustomTypesPerDataset } from 'chart.js/auto';
import type { Grupo, AsignaturaAnalizada } from '$lib/types';

export function createGraphDistribucionDocentes(
	canvas: HTMLCanvasElement,
	asignatura: AsignaturaAnalizada
) {
	const recomendado = asignatura.recomendaciones.sort((a, b) => b.inscritos - a.inscritos);

	const colors = ['#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe', '#ede9fe', '#f5f3ff'];

	const c = [];
	for (let i = 0; i < recomendado.length; i++) {
		c.push(colors[i % colors.length]);
	}

	const data = {
		labels: recomendado.map((docente) => docente.docente),
		datasets: [
			{
				label: 'Cupos inscritos',
				data: recomendado.map((docente) => docente.inscritos),
				backgroundColor: c,
				borderRadius: 6,
				borderColor: 'rgb(255, 255, 255, 0)',
				offset: 12
			}
		]
	};

	return new Chart(canvas, {
		type: 'doughnut',
		data: data,
		options: {
			animation: false
		}
	});
}

export function createGraphDistribucionCupos(
	canvas: HTMLCanvasElement,
	asignatura: AsignaturaAnalizada,
	grupo: Grupo | null
) {
	const total = asignatura.total;
	const labels = Object.keys(total);

	const styleConfig = {
		color: '#ffffff',
		pointHitRadius: 10,
		pointRadius: 3.5
	};

	const datasetTotal = {
		label: 'Cupos totales',
		backgroundColor: '#a78bfa',
		borderColor: '#a78bfa',
		data: Object.values(total),
		...styleConfig
	};

	const datasetGrupo = grupo
		? {
				label: `Cupos ${grupo.grupo}`,
				backgroundColor: '#fb7185',
				borderColor: '#fb7185',
				data: Object.values(asignatura.grupos[grupo.grupo].cupos),
				...styleConfig
			}
		: false;

	const datasets = grupo ? [datasetTotal, datasetGrupo] : [datasetTotal];

	return new Chart(canvas, {
		type: 'line',
		data: {
			labels: labels,
			datasets: datasets as
				| ChartDataset<'line', number[]>[]
				| ChartDatasetCustomTypesPerDataset<'line', number[]>[]
		},
		options: {
			animation: false,
			indexAxis: 'x',
			scales: {
				y: {
					min: 0
				}
			}
		}
	});
}
