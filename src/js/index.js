
// Function to display a list of subjects
function mostrarListadoMaterias(materias) {
    const tbody = document.getElementById("materias");
    tbody.innerHTML = "";

    materias.forEach(materia => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="border px-2 text-center">${materia.codigo}</td>
            <td class="border px-2">${materia.nombre}</td>
            <td class="border px-2"><button class="btn btn-outline-success">+</button></td>
            <td class="border px-2 text-center">${materia.creditos}</td>
            <td class="border px-2 text-center">${materia.tipologia}</td>
            <td class="border px-2 text-center">${materia.grupos.length}</td>
        `;

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