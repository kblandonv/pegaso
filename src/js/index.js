(function () {
    // Global variable to keep track of used colors
    const GLOBALS = {
        usedColors: []
    };

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

    function seCruza(grupo) {
        const calendarBody = document.getElementById("calendar-body");

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

        const horarios = grupo.horarios;

        for (const horario of horarios) {
            const [inicio, fin, dia] = getDataHorario(horario);

            for (let hora = inicio; hora < fin; hora++) {
                const td = getCell(hora, dia);
                if (td.className.includes("color-")) {
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
            
            const conflicto = seCruza(grupo);
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
    })();
})();


function seCruzan(horario1, horario2) {
    let horariosPorDia = {};

    for (let horario of horario1) {
        if (!horariosPorDia[horario.dia]) {
            horariosPorDia[horario.dia] = [];
        }
        horariosPorDia[horario.dia].push({ inicio: horario.inicio, fin: horario.fin });
    }

    for (let horario of horario2) {
        if (horariosPorDia[horario.dia]) {
            for (let horarioExistente of horariosPorDia[horario.dia]) {
                if ((horario.inicio >= horarioExistente.inicio && horario.inicio < horarioExistente.fin) ||
                    (horarioExistente.inicio >= horario.inicio && horarioExistente.inicio < horario.fin)) {
                    return true;
                }
            }
        }
    }

    return false;
}