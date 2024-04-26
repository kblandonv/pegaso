<script>
    import MateriaRow from './MateriaRow.svelte';
    import { getmateriasSeleccionadas } from '../../stores/asignaturas.svelte.js';
    let materiasSeleccionadas = getmateriasSeleccionadas();

    let totalCreditos = $derived(Object.values(materiasSeleccionadas.data).reduce((acc, materia) => acc + parseInt(materia.creditos), 0));

</script>

<details open class="mb-4">
    <summary class="rounded-top py-2 px-4 font-bold">
        <div class="d-flex justify-content-between">
            <span id="asignaturas-seleccionadas">Asignaturas seleccionadas: {materiasSeleccionadas.data.length}</span>
            <span id="total-creditos">Total Creditos: {totalCreditos}</span>
            <i class="bi bi-chevron-down"></i>
        </div>
    </summary>

    <table class="table-fixed w-full border rounded mb-4">
        <thead class="text-center">
            <tr>
                <th class="my-border px-4 py-2">Codigo</th>
                <th class="my-border px-4 py-2">Nombre</th>
                <th class="my-border px-4 py-2">Creditos</th>
                <th class="my-border px-4 py-2">Grupo</th>
                <th class="my-border px-4 py-2">Docente</th>
                <th class="my-border px-4 py-2">Cupos</th>
                <th class="my-border px-4 py-2">Horario</th>
                <th class="my-border px-4 py-2">...</th>
            </tr>
        </thead>
        <tbody class="calendar-body" id="selected">
            {#each materiasSeleccionadas.data as materia}
                <MateriaRow {materia} />
            {/each}
        </tbody>
    </table>
</details>