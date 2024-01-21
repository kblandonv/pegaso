// Global variable to keep track of used colors
const GLOBALS = {
    usedColors: []
};

const calendarBody = document.getElementById("calendar-body");

function getCell(hora, dia) {
    const calendarBody = document.getElementById("calendar-body");
    const filaHora = calendarBody.querySelector(`#hora-${hora}`);
    return filaHora.querySelector(`#${dia}`);
}

function getDataHorario(horario) {
    const inicio = parseInt(horario.inicio.split(":")[0]);
    const fin = parseInt(horario.fin.split(":")[0]);
    const dia = horario.dia.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return [inicio, fin, dia];
}

// Function to generate a random color class
function getColor() {
    const color = `color-${Math.floor(Math.random() * 8) + 1}`;
    if (GLOBALS.usedColors.includes(color)) {
        return getColor();
    } else {
        GLOBALS.usedColors.push(color);
        return color;
    }
}

// Function to add options to a select element
function addOptions(selectElement, optionValues) {
    selectElement.innerHTML = "";
    optionValues.forEach(value => {
        const option = document.createElement("option");
        option.text = value;
        option.value = value;
        selectElement.appendChild(option);
    });
}

// Example data
const materia = {
    nombre: "Construcción II (3010283)",
    tipologia: "DISCIPLINAR OPTATIVA",
    creditos: "3",
    facultad: "FACULTAD DE ARQUITECTURA",
    fechaExtraccion: "1/18/2024 - 10:30:02 PM",
    cuposDisponibles: 30,
    grupos: [
        {
            grupo: "(1) Grupo 1 ",
            cupos: 30,
            profesor: "Edison Aldemar Hincapie Atehortua. ",
            duracion: " Semestral",
            jornada: "DIURNO",
            horarios: [
                {
                    dia: "MIÉRCOLES",
                    inicio: "08:00",
                    fin: "10:00"
                },
                {
                    dia: "JUEVES",
                    inicio: "10:00",
                    fin: "12:00"
                }
            ]
        }
    ]
};