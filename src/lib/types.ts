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
	istodas: boolean;
	cantidad: number;
	asignaturas: {
		codigo: string;
		nombre: string;
	}[];
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

export interface AsignaturaAnalizada {
	nombre: string;
	tipologia: string;
	codigo: string;
	facultad: string;
	carrera: string;
	total: Record<string, number>;
	grupos: Record<
		string,
		{
			profesor: string;
			cupos: Record<string, number>;
		}
	>;
	recomendaciones: {
		docente: string;
		inscritos: number;
		puntaje: number;
	}[];
}
