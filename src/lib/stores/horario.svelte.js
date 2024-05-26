import { parseHorario, getColor } from '$lib/utils/utils';
import { storeAsignaturas } from './asignaturas.svelte.js';

class SeleccionItem {
    ref = $state(false);
    groupValue = $state(null);

    materia = $derived(
        this.ref ?
        storeAsignaturas.data[this.ref.facultad][this.ref.carrera].find((materia) => materia.codigo === this.ref.codigo)
        : null
    );
    
    grupo = $derived(
        this.groupValue && this.materia ?
        this.materia.grupos.find((grupo) => grupo.grupo === this.groupValue)
        : null
    );

    horarios = $state(null);
    color = $state(getColor());

    constructor(refMateria) {
        this.ref = refMateria;
    }
}

class StoreHorario {
    seleccion = $state({});
    horario = $state(Object.fromEntries(
        ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'].map((dia) => {
            return [
                dia,
                Object.fromEntries(['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'].map((h) => [h, null]))
            ];
        })
    ));

    constructor() {};

    saveToStorage() {
        const data = Object.values(this.seleccion).map(seleccion => ({
            materia: seleccion.materia,
            groupValue: seleccion.groupValue
        }));
        localStorage.setItem('localHorario', JSON.stringify(data));
    }

    loadFromStorage() {
        const storedData = localStorage.getItem('localHorario');

        if (!storedData) return false;

        const seleccionHorario = JSON.parse(storedData);
        for (const seleccion of seleccionHorario) {
            this.agregarAsignatura(seleccion.materia);
            this.asignarHorario(seleccion.materia, seleccion.groupValue)
        }
    }

    /* Metodos asignaturas seleccionadas */
    agregarAsignatura(materia) {
        this.seleccion[materia.codigo] = new SeleccionItem(materia);
        this.saveToStorage();
    }

    eliminarAsignatura(materia) {
        this.limpiarHorario(materia);
        delete this.seleccion[materia.codigo];
        this.saveToStorage();
    }

    limpiarHorario(materia) {
        const horarioAnterior = this.seleccion[materia.codigo].horarios;
        if (horarioAnterior) {
            for (const h of horarioAnterior) {
                const { dia, inicio, fin } = parseHorario(h);

                for (let time = inicio; time < fin; time++) {
                    this.horario[time.toString()][dia.toString()] = null;
                }
            }
        }
    }

    asignarHorario(materia, groupValue) {

        this.seleccion[materia.codigo].groupValue = groupValue;
        this.saveToStorage();

        // Si no hay un grupo o se deselecciono, limpiar horario
        if (!groupValue) {
			storeHorario.limpiarHorario(materia);
            return;
		}

        this.limpiarHorario(materia);

        const horarios = this.seleccion[materia.codigo].grupo.horarios
        this.seleccion[materia.codigo].horarios = horarios;

        for (const h of horarios) {
            const { dia, inicio, fin } = parseHorario(h);

            for (let time = inicio; time < fin; time++) {
                this.horario[time.toString()][dia.toString()] = materia.codigo;
            }
        }
    }

    verificarHorario(codigo, horarios) {
        for (const h of horarios) {
            const { dia, inicio, fin } = parseHorario(h);

            for (let time = inicio; time < fin; time++) {
                const campoHorario = this.horario[time.toString()][dia.toString()];
                if (campoHorario !== null && campoHorario !== codigo) {
                    return this.seleccion[campoHorario].materia;
                }
            }
        }
        return true;
    }

}

export const storeHorario = new StoreHorario();