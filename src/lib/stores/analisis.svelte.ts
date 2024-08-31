import * as jsonAnalisis from '$lib/assets/analisis.json';
import { Graficos } from '../utils/enums';
import { createGraphDistribucionCupos, createGraphDistribucionDocentes } from '../client/graphs';
import { storeHorario } from './horario.svelte';

import type { Asignatura, AsignaturaAnalizada } from '../types';

const analisisData = jsonAnalisis.default;

class Analisis {
	currentAsignatura: AsignaturaAnalizada | null = $state(null);
	elementos: Record<Graficos, HTMLDialogElement | null> = {
		[Graficos.DISTRIBUCION_CUPOS]: null,
		[Graficos.DOCENTES_RECOMENDADOS]: null,
		[Graficos.DISTRIBUCION_DOCENTES]: null
	};

	currentGraph: any = null;

	dispatchAnalizis(asignatura: Asignatura, grafico: Graficos) {
		const asignaturaAnalizada: AsignaturaAnalizada =
			analisisData[asignatura.facultad][asignatura.carrera][asignatura.codigo];
		if (asignaturaAnalizada === undefined) {
			return;
		}

		if (this.currentGraph !== null) {
			this.currentGraph.destroy();
		}

		this.currentAsignatura = asignaturaAnalizada;

		switch (grafico) {
			case Graficos.DISTRIBUCION_CUPOS: {
				const canvas = this.elementos[grafico]?.querySelector('canvas');
				if (canvas === null || canvas === undefined) {
					return;
				}
				const grupo = storeHorario.seleccion[asignatura.codigo].grupo;
				this.currentGraph = createGraphDistribucionCupos(
					canvas,
					asignaturaAnalizada,
					Object.keys(grupo).length === 0 ? null : grupo
				);
				this.elementos[grafico]?.showModal();
				break;
			}
			case Graficos.DISTRIBUCION_DOCENTES: {
				const canvas = this.elementos[grafico]?.querySelector('canvas');
				if (canvas === null || canvas === undefined) {
					return;
				}
				this.currentGraph = createGraphDistribucionDocentes(canvas, asignaturaAnalizada);
				this.elementos[grafico]?.showModal();
				break;
			}

			case Graficos.DOCENTES_RECOMENDADOS: {
				this.elementos[grafico]?.showModal();
				break;
			}
			default:
				break;
		}
	}
}

export const storeAnalisis = new Analisis();
