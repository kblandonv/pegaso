import { parseHorario, getColor } from '$lib/utils/utils';

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

    constructor() { };

    /* Metodos asignaturas seleccionadas */
    agregarAsignatura(materia) {
        this.seleccion[materia.codigo] = {
            materia: materia,
            horarios: null,
            color: getColor(),
            grupo: null,
        };

    }

    eliminarAsignatura(materia) {
        this.limpiarHorario(materia);
        delete this.seleccion[materia.codigo];

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
        this.seleccion[materia.codigo].grupo = null;
    }

    asignarHorario(materia, grupo) {
        this.limpiarHorario(materia);

        const horarios = grupo.horarios

        this.seleccion[materia.codigo].horarios = horarios;
        this.seleccion[materia.codigo].grupo = grupo;

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