function TableHead() {
    return (
        <thead class="text-center">
            <tr>
                <th class="border px-4 py-2">Codigo</th>
                <th class="border px-4 py-2">Nombre</th>
                <th class="border px-4 py-2">Creditos</th>
                <th class="border px-4 py-2">Grupo</th>
                <th class="border px-4 py-2">Docente</th>
                <th class="border px-4 py-2">Cupos</th>
                <th class="border px-4 py-2">Horario</th>
                <th class="border px-4 py-2">...</th>
            </tr>
        </thead>
    )
}

function RowMateria({ materia, GLOBAL }) {

    const handlerDelete = () => {
        GLOBAL.deleteMateria(materia.codigo);
    }

    return (
        <tr>
            <td id="codigo" class="px-3 border">{materia.codigo}</td>
            <td id="nombre" class="px-3 border">{materia.nombre}</td>
            <td class="px-3 border text-center">{materia.creditos}</td>
            <td class="px-3 border text-center">
                <select defaultValue="" class="form-select form-select-sm">
                    <option value="">No seleccionado</option>
                    {materia.grupos.map((grupo) => {
                        return (
                            <option value={grupo.grupo}>{grupo.grupo}</option>
                        )
                    })}
                </select>
            </td>
            <td id="docente" class="px-3 border text-center"></td>
            <td id="cupos" class="px-3 border text-center"></td>
            <td id="horario" class="px-3 border text-center"></td>
            <td class="px-3 border text-center"><button onClick={handlerDelete} class="btn btn-outline-danger my-button"><i class="bi bi-trash"></i></button></td>
        </tr>
    )
}


function TableSelected({ GLOBAL }) {

    const materias = GLOBAL.MATERIAS;

    return (
        <table class="table-fixed w-full border rounded my-4">

            <TableHead />

            <tbody class="calendar-body" id="selected">
                {Object.keys(materias).map((key) => {
                    return (
                        <RowMateria materia={materias[key]} GLOBAL={GLOBAL} />
                    )
                })}
            </tbody>
        </table>
    )
}

export default TableSelected;