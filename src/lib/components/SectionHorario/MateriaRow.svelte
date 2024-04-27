<script>
    let { materia } = $props();
    import { getStoreHorario, getStoreSeleccion } from '../../stores/horario.svelte.js';

    let storeHorario = getStoreHorario();
    let storeSeleccion = getStoreSeleccion();

    let groupValue = $state("")
    let selectedGrupo = $derived(materia.grupos.find(grupo => grupo.grupo === groupValue));

    $effect(() => {
        if (selectedGrupo) {
            storeHorario.asignar(materia, selectedGrupo.horarios);
        } else {
            storeHorario.limpiar(materia);
        }
    });

    function deleteMateria() {
        storeSeleccion.eliminar(materia);
    }
</script>

<tr>
    <td id="codigo" class="px-3 my-border">{materia.codigo}</td>
    <td id="nombre" class="px-3 my-border">{materia.nombre}</td>
    <td class="px-3 my-border">{materia.creditos}</td>
    <td class="px-3 my-border">
        <select class="form-select form-select-sm" bind:value={groupValue}>
            <option value="">No seleccionado</option>
            {#each materia.grupos as grupo (grupo)}
                <option value={grupo.grupo}>{grupo.grupo}</option>
            {/each}
        </select>
    </td>
    <td id="docente" class="px-3 my-border">{selectedGrupo && selectedGrupo.profesor}</td>
    <td id="cupos" class="px-3 my-border">{selectedGrupo && selectedGrupo.cupos}</td>
    <td id="horario" class="px-3 my-border">{selectedGrupo && selectedGrupo.horarios.map(horario => `${horario.dia} ${horario.inicio}-${horario.fin}`).join(", ")}</td>
    <td class="px-3 my-border">
        <button onclick={deleteMateria} class="onclick-push-me my-delete-button"><i class="bi bi-x-square-fill text-2xl"></i></button>
    </td>
</tr>

<style>
    td {
        text-align: center;
    }
</style>