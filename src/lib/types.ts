export interface Horario {
	inicio: string;
	fin: string;
	dia: string;
}

export interface Grupo {
	grupo: string;
	cupos: number;
	profesor: string;
	duracion: string;
	jornada: string;
	horarios: Horario[];
}

export interface Prerequisito {
	tipo: string;
	isTodas: boolean;
	cantidad: number;
	asignaturas: Record<string, string>[];
}

export interface Asignatura {
	codigo: string;
	nombre: string;
	tipologia: string;
	creditos: number;
	facultad: string;
	carrera: string;
	fechaExtraccion: string;
	cuposDisponibles: number;
	prerequisitos: Prerequisito[];
	grupos: Grupo[];
}

export interface RecordCarrera {
	facultad: string;
	carrera: string;
	asignaturas: Asignatura[];
}

export interface StoreAsignaturasInterface {
	[facultad: string]: {
		[carrera: string]: RecordCarrera;
	};
}

export interface Metadata {
	lastUpdated: string;
}
