/*
Pseudo code:
Al agregar una materia
Verificar si el grupo no se cruza con otra materia
    Si se cruza, seleccionar el siguiente grupo, sino mostrar error
    Si no se cruza, mostrar horario y actualizar opciones disponibles
*/


const MATERIAS = [];

function isValidGroup() {
    
}

function seCruza(materia, grupo) {
    const horarios = grupo.horarios;

    for (const horario of horarios) {
        const [inicio, fin, dia] = getDataHorario(horario);

        for (let hora = inicio; hora < fin; hora++) {
            const td = getCell(hora, dia);
            if (td.className.includes("color-") && td.textContent !== materia.nombre) {
                return td.textContent;
            }
        }
    }

    return false;
}

// Function to show the schedule for a given group and subject
function showHorario(grupo, materia, colorClass) {
    const calendarBody = document.getElementById("calendar-body");
    const horarios = grupo.horarios;

    const getCell = (hora, dia) => {
        const filaHora = calendarBody.querySelector(`#hora-${hora}`);
        return filaHora.querySelector(`#${dia}`);
    };

    const getDataHorario = (horario) => {
        const inicio = parseInt(horario.inicio.split(":")[0]);
        const fin = parseInt(horario.fin.split(":")[0]);
        const dia = horario.dia.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        return [inicio, fin, dia];
    };

    const arraysDias = [];
    for (const horario of horarios) {
        const [inicio, fin, dia] = getDataHorario(horario);
        const celdasDia = [];
        for (let hora = inicio; hora < fin; hora++) {
            const td = getCell(hora, dia);

            td.classList.add(colorClass);
            td.textContent = materia.nombre;
            celdasDia.push(td);
        }
        arraysDias.push(celdasDia);
    }
    return arraysDias;
}