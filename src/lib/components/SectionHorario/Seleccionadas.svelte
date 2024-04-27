<script>
    import MateriaRow from './MateriaRow.svelte';
    import { getStoreSeleccion } from '../../stores/horario.svelte.js';
    let storeSeleccion = getStoreSeleccion();

    let totalCreditos = $derived(Object.values(storeSeleccion.data).reduce((acc, obj) => acc + parseInt(obj.materia.creditos), 0));

</script>

<details open class="mb-4">
    <summary class="rounded-top py-2 px-4 font-bold">
        <div class="d-flex justify-content-between">
            <span id="asignaturas-seleccionadas">Asignaturas seleccionadas: {Object.keys(storeSeleccion.data).length}</span>
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
            {#each Object.entries(storeSeleccion.data) as entries (entries[0])}
                <MateriaRow color={entries[1].color} materia={entries[1].materia} />
            {/each}
        </tbody>
    </table>
</details>