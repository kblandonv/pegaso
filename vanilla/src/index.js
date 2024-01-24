function getPopUp(materia) {
    const popUp = document.getElementById("popUp");
    popUp.querySelector("#popUp-body").textContent = `Se agrego: ${materia.nombre}.`;

    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(popUp);
    toastBootstrap.show();
}


function isValid(grupoOption, codigoMateria) {
    for (const codigo in CALENDAR.grupos) {
        if (codigo === codigoMateria || grupoOption === CALENDAR.grupos[codigo]) {
            continue;
        }

        if (seCruza(grupoOption, CALENDAR.grupos[codigo])) {
            return [false, codigo];
        }
    }
    return [true, null];
}

function updateOptions(actualTr) {
    const tableGuardadas = document.getElementById("selected");
    const trs = tableGuardadas.querySelectorAll("tr");

    // Actualizar options en los demas grupos
    for (const trMateria of trs) {
        if (trMateria !== actualTr) {
            const currentSelect = trMateria.querySelector("select");
            const currentMateria = CALENDAR.materias[trMateria.querySelector("#codigo").textContent];
            const currentOptions = currentSelect.querySelectorAll("option");

            for (const option of currentOptions) {

                if (option.value === "") continue;

                const grupoOption = currentMateria.grupos.find(grupo => grupo.grupo === option.value);
                const [isOptionValid, codigoConflicto] = isValid(grupoOption, currentMateria.codigo);

                option.title = isOptionValid ? "" : `Se cruza con ${CALENDAR.materias[codigoConflicto].nombre}`;
                option.disabled = !isOptionValid;
            }
        }
    }
}

function addDataGroup(tr, newGrupo) {
    tr.querySelector("#docente").textContent = newGrupo.profesor;
    tr.querySelector("#cupos").textContent = newGrupo.cupos;
    tr.querySelector("#horario").textContent = newGrupo.horarios.map(horario => `${horario.dia} ${horario.inicio}-${horario.fin}`).join(", ");
}

// Function to display a list of subjects
function mostrarListadoMaterias(materias) {
    const tbody = document.getElementById("materias");
    tbody.innerHTML = "";

    materias.forEach(materia => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="border px-2 text-center">${materia.codigo}</td>
            <td class="border px-2 text-center">${materia.creditos}</td>
            <td class="border px-2">${materia.nombre}</td>
            <td class="border px-2"><button class="btn btn-outline-success my-button">+</button></td>
            <td class="border px-2 text-center">${materia.tipologia}</td>
            <td class="border px-2 text-center">${materia.grupos.length}</td>
        `;

        // Event listener for the "Add" button
        const button = tr.querySelector("button");
        button.addEventListener("click", () => {
            getPopUp(materia);
            guardarMateria(materia, button);
            button.disabled = true;
            button.className = "btn btn-outline-secondary my-button";
        });
        tbody.appendChild(tr);
    });
}

// Main function
(async () => {
    const raw = await fetch("assets/data.json");
    const data = await raw.json();

    const facultades = Object.keys(data);
    const selectFacultad = document.getElementById("facultad");
    const selectCarrera = document.getElementById("carrera");
    const selectTipologia = document.getElementById("tipologia");

    // Function to filter subjects based on faculty, career, and typology
    function filtrarMaterias(facultad, carrera, tipologia) {
        const allMaterias = data[facultad][carrera];
        const isAll = tipologia === "TODAS LAS ASIGNATURAS";
        return isAll ? allMaterias : allMaterias.filter(materia => materia.tipologia === tipologia);
    }

    // Add options to the faculty select
    addOptions(selectFacultad, facultades);

    // Event listener for faculty selection
    selectFacultad.addEventListener("change", function () {
        const facultad = this.value;
        const carreras = Object.keys(data[facultad]);
        addOptions(selectCarrera, carreras);
    });

    // Event listener for career selection
    selectCarrera.addEventListener("change", function () {
        const facultad = selectFacultad.value;
        const carrera = this.value;
        const materias = data[facultad][carrera];
        const tipologias = [
            "TODAS LAS ASIGNATURAS",
            ...new Set(materias.map(materia => materia.tipologia))
        ];
        addOptions(selectTipologia, tipologias);
        selectTipologia.dispatchEvent(new Event("change"));
    });

    // Event listener for typology selection
    selectTipologia.addEventListener("change", function () {
        const facultad = selectFacultad.value;
        const carrera = selectCarrera.value;
        const tipologia = this.value;

        const materias = filtrarMaterias(facultad, carrera, tipologia);
        mostrarListadoMaterias(materias);
    });

    // Trigger faculty selection event
    selectFacultad.dispatchEvent(new Event("change"));
})();


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
    const color = `color-${Math.floor(Math.random() * 11) + 1}`;
    if (GLOBALS.usedColors.includes(color) && GLOBALS.usedColors.length < 11) {
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

const CALENDAR = {
    materias: {},
    grupos: {},
};

function seCruza(grupo1, grupo2) {
    const horarios1 = grupo1.horarios;
    const horarios2 = grupo2.horarios;

    for (const horario1 of horarios1) {
        const [inicio1, fin1, dia1] = getDataHorario(horario1);
        for (const horario2 of horarios2) {
            const [inicio2, fin2, dia2] = getDataHorario(horario2);
            if (dia1 === dia2) {
                const mismoHorario = inicio1 == inicio2 && fin1 == fin2;
                const seCruza = (inicio1 < fin2 && fin1 > inicio2) || (inicio2 < fin1 && fin2 > inicio1);
                if (mismoHorario || seCruza) {
                    return true;
                }
            }
        }
    }
    return false;
}

// Function to save a subject and its selected group
function guardarMateria(materia, prevButton) {

    const tableGuardadas = document.getElementById("selected");
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td id="codigo" class="px-3 border">${materia.codigo}</td>
        <td id="nombre" class="px-3 border">${materia.nombre}</td>
        <td class="px-3 border text-center">${materia.creditos}</td>
        <td class="px-3 border text-center"><select class="form-select form-select-sm"></select></td>
        <td id="docente" class="px-3 border text-center"></td>
        <td id="cupos" class="px-3 border text-center"></td>
        <td id="horario" class="px-3 border text-center"></td>
        <td class="px-3 border text-center"><button class="btn btn-outline-danger my-button"><i class="bi bi-trash"></i></button></td>
    `;
    const selectGrupo = tr.querySelector("select");


    const addFirst = () => {
        const option = document.createElement("option");
        option.text = "No seleccionado";
        option.value = "";
        selectGrupo.appendChild(option);
    }

    addFirst();

    // Add options for each group of the subject
    materia.grupos.forEach(grupo => {
        const option = document.createElement("option");
        option.text = grupo.grupo;
        option.value = grupo.grupo;
        option.selected = false;
        selectGrupo.appendChild(option);
    });

    // Function to clear the schedule and remove the color class
    const limpiar = (arraysDias) => {
        if (arraysDias) {
            arraysDias.forEach(celda => {
                celda.classList.remove(colorClass);
                celda.textContent = "";
            });
            GLOBALS.usedColors = GLOBALS.usedColors.filter(color => color !== colorClass);
        }
    };

    const colorClass = getColor();
    tr.classList.add(`tr-${colorClass}`);
    let arraysDias = null;

    // Actualizar estado global de materias
    CALENDAR.materias[materia.codigo] = materia;

    // Event listener for group selection
    selectGrupo.addEventListener("change", function () {

        if (this.value === "") {
            limpiar(arraysDias);
            delete CALENDAR.grupos[materia.codigo];
        } else {
            const newGrupo = materia.grupos.find(grupo => grupo.grupo === this.value);

            addDataGroup(tr, newGrupo);

            // Actualizar estado global de grupos
            CALENDAR.grupos[materia.codigo] = newGrupo;

            limpiar(arraysDias);
            arraysDias = displayHorario(newGrupo, materia, colorClass);
        }

        // Actualizar options en los demas grupos
        updateOptions(tr);
    });

    const btnEliminar = tr.querySelector("button");
    btnEliminar.addEventListener("click", () => {
        tr.remove();
        delete CALENDAR.materias[materia.codigo];
        if (CALENDAR.grupos.hasOwnProperty(materia.codigo)) {
            delete CALENDAR.grupos[materia.codigo];
        }
        limpiar(arraysDias);
        prevButton.disabled = false;
        prevButton.className = "btn btn-outline-success my-button";
    });


    tableGuardadas.appendChild(tr);
}

// Function to show the schedule for a given group and subject
function displayHorario(grupo, materia, colorClass) {
    const horarios = grupo.horarios;

    const arraysCeldas = [];
    for (const horario of horarios) {
        const [inicio, fin, dia] = getDataHorario(horario);
        for (let hora = inicio; hora < fin; hora++) {
            const td = getCell(hora, dia);
            td.classList.add(colorClass);
            td.textContent = materia.nombre;
            arraysCeldas.push(td);
        }
    }

    return arraysCeldas;
}