import * as jsonAnalisis from '$lib/assets/analisis.json';
const analisisData = jsonAnalisis.default;
class Analisis {
    asignatura = $state(null);
    elementos = $state({
        cupos: null,
        docentes: null,
        distribucion: null,
    });
    analized = $derived(
        this.asignatura ?
        analisisData[this.asignatura.facultad][this.asignatura.carrera][this.asignatura.codigo] :
        null
    );
    
    constructor() {}
}

export const storeAnalisis = new Analisis();