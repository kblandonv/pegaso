// Function to save a subject and its selected group
function guardarMateria(materia) {
    MATERIAS.push(materia);

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
            arraysDias.forEach(array => {
                array.forEach(celda => {
                    celda.classList.remove(colorClass);
                    celda.textContent = "";
                });
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
        arraysDias = showHorario(grupo, materia, colorClass);
    });

    selectGrupo.dispatchEvent(new Event("change"));
    tableGuardadas.appendChild(tr);
}

// Function to display a list of subjects
function mostrarListadoMaterias(materias) {
    const tbody = document.getElementById("materias");
    tbody.innerHTML = "";

    materias.forEach(materia => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                <td class="border px-2 text-center">${materia.nombre.match(/\(([^)]+)\)/)[1].trim()}</td>
                <td class="border px-2">${materia.nombre.replace(/\(.*?\)/g, '').trim()}</td>
                <td class="border px-2"><button class="btn btn-outline-success">+</button></td>
                <td class="border px-2 text-center">${materia.creditos}</td>
                <td class="border px-2 text-center">${materia.tipologia}</td>
                <td class="border px-2 text-center">${materia.grupos.length}</td>`;

        // Event listener for the "Add" button
        tr.querySelector("button").addEventListener("click", () => guardarMateria(materia));
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