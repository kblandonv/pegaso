export function getDataHorario(horario) {
	const dia = horario.dia.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	const inicio = parseInt(horario.inicio.split(":")[0]);
	const fin = parseInt(horario.fin.split(":")[0]);
	return {dia, inicio, fin};
}

export function seCruza(grupo1, grupo2) {
    const horarios1 = grupo1.horarios;
    const horarios2 = grupo2.horarios;

    for (const horario1 of horarios1) {
        const [inicio1, fin1, dia1] = getDataHorario(horario1);
        
        for (const horario2 of horarios2) {
            const [inicio2, fin2, dia2] = getDataHorario(horario2);

            if (dia1 === dia2) {

                const mismoHorario = (inicio1 === inicio2) && (fin1 === fin2);
                const seCruza = (inicio1 < fin2 && fin1 > inicio2) || (inicio2 < fin1 && fin2 > inicio1);
                if (mismoHorario || seCruza) {
                    return true;
                }

            }
        }
    }
    return false;
}