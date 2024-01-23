/*
Pseudo code:
Al agregar una materia
Verificar si el grupo no se cruza con otra materia
    Si se cruza, seleccionar el siguiente grupo, sino mostrar error
    Si no se cruza, mostrar horario y actualizar opciones disponibles
*/
// Add tooltip to option element

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
function guardarMateria(materia) {

    const tableGuardadas = document.getElementById("selected");
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td id="codigo" class="px-3 border">${materia.codigo}</td>
        <td id="nombre" class="px-3 border">${materia.nombre}</td>
        <td class="px-3 border text-center">${materia.creditos}</td>
        <td class="px-3 border text-center"><select class="form-select"></select></td>
        <td id="docente" class="px-3 border text-center"></td>
        <td id="cupos" class="px-3 border text-center"></td>
        <td id="horario" class="px-3 border text-center"></td>
        <td class="px-3 border text-center"><button class="btn btn-outline-danger"><i class="bi bi-trash"></i></button></td>
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
    let arraysDias = null;

    // Actualizar estado global de materias
    CALENDAR.materias[materia.codigo] = materia;

    // Event listener for group selection
    selectGrupo.addEventListener("change", function () {

        if (this.value === "") {
            console.log("No seleccionado");
            limpiar(arraysDias);
            delete CALENDAR.grupos[materia.codigo];
        } else {
            const newGrupo = materia.grupos.find(grupo => grupo.grupo === this.value);

            tr.querySelector("#docente").textContent = newGrupo.profesor;
            tr.querySelector("#cupos").textContent = newGrupo.cupos;
            tr.querySelector("#horario").textContent = newGrupo.horarios.map(horario => `${horario.dia} ${horario.inicio}-${horario.fin}`).join(", ");

            // Actualizar estado global de grupos
            CALENDAR.grupos[materia.codigo] = newGrupo;

            limpiar(arraysDias);
            arraysDias = displayHorario(newGrupo, materia, colorClass);
        }


        function isValid(grupoOption, codigoMateria) {
            for (const codigo in CALENDAR.grupos) {
                const grupoCalendar = CALENDAR.grupos[codigo];

                if (codigo === codigoMateria) {
                    continue;
                }

                if (grupoOption === grupoCalendar) {
                    continue;
                };

                if (seCruza(grupoOption, grupoCalendar)) {
                    return [false, codigo];
                }
            }
            return [true, null];
        }

        const trs = tableGuardadas.querySelectorAll("tr");

        // Actualizar options en los demas grupos
        for (const trMateria of trs) {
            if (trMateria !== tr) {
                const currentSelect = trMateria.querySelector("select");
                const currentMateria = CALENDAR.materias[trMateria.querySelector("#codigo").textContent];
                const currentOptions = currentSelect.querySelectorAll("option");

                for (const option of currentOptions) {

                    if (option.value === "") continue;

                    const grupoOption = currentMateria.grupos.find(grupo => grupo.grupo === option.value);
                    const [isOptionValid, codigo] = isValid(grupoOption, currentMateria.codigo);

                    console.log(currentMateria.nombre, grupoOption, grupoOption.grupo, isOptionValid, codigo);

                    option.disabled = !isOptionValid;
                }
            }
        }
    });

    const btnEliminar = tr.querySelector("button");
    btnEliminar.addEventListener("click", () => {
        tr.remove();
        delete CALENDAR.materias[materia.codigo];
        if (CALENDAR.grupos.hasOwnProperty(materia.codigo)) {
            delete CALENDAR.grupos[materia.codigo];
        }
        limpiar(arraysDias);
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