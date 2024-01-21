/*
Pseudo code:
Al agregar una materia
Verificar si el grupo no se cruza con otra materia
    Si se cruza, seleccionar el siguiente grupo, sino mostrar error
    Si no se cruza, mostrar horario y actualizar opciones disponibles
*/

const CALENDAR = {
    materias: [],
    grupos: {},
};

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

// Function to save a subject and its selected group
function guardarMateria(materia) {

    const tableGuardadas = document.getElementById("selected");
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td class="px-3 border">${materia.nombre.replace(/\(.*?\)/g, '').trim()}</td>
        <td class="px-3 border text-center">${materia.creditos}</td>
        <td class="px-3 border text-center"><select class="form-select"></select></td>
        <td id="docente" class="px-3 border text-center"></td>
        <td id="cupos" class="px-3 border text-center"></td>
        <td id="horario" class="px-3 border text-center"></td>
        <td class="px-3 border text-center">...</td>
    `;

    const selectGrupo = tr.querySelector("select");

    // Add options for each group of the subject
    materia.grupos.forEach(grupo => {
        const option = document.createElement("option");
        option.text = grupo.grupo;
        option.value = grupo.grupo;
        selectGrupo.appendChild(option);
    });

    const colorClass = getColor();

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

    let arraysDias = null;

    // Event listener for group selection
    selectGrupo.addEventListener("change", function () {

        const grupo = materia.grupos.find(grupo => grupo.grupo === this.value);
        tr.querySelector("#docente").textContent = grupo.profesor;
        tr.querySelector("#cupos").textContent = grupo.cupos;
        tr.querySelector("#horario").textContent = grupo.horarios.map(horario => `${horario.dia} ${horario.inicio}-${horario.fin}`).join(", ");

        const conflicto = seCruza(materia, grupo);
        if (conflicto) {
            alert(`Ya existe una materia en el horario seleccionado: ${conflicto}`);
            return;
        }

        limpiar(arraysDias);
        arraysDias = displayHorario(grupo, materia, colorClass);
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