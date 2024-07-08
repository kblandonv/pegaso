export interface Horario {
    inicio: string
    fin: string
    dia: string
}

export interface Grupo {
    grupo: string
    cupos: number
    profesor: string
    duracion: string
    jornada: string
    horarios: Horario[]
}

export interface Asignatura {
    codigo: string
    nombre: string
    tipologia: string
    creditos: string
    facultad: string
    carrera: string
    fechaExtraccion: string
    cuposDisponibles: number

    grupos: Grupo[]
}

export interface Asignaturas {
    [facultad: string]: {
        [carrera: string]: Asignatura[]
    }
}