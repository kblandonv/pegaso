<script>

    let estados = $state({
        "presentation": false,
        "presentation-2": false,
    });

    export function setActive(id) {
        estados[id] = true;    
    }

    export function deleteActive(id) {
        estados[id] = false;    
    }
    
</script>

<ul class="d-flex flex-col gap-3 px-5">
    {#each Object.entries(estados) as entries (entries[0])}
        <li class="rounded px-2 py-1 text-center {entries[1] ? "active" : ""}" >
            <a href="#{entries[0]}">{entries[0]}</a>
        </li>
    {/each}
</ul>

<style>
    .active {
        background-color: blueviolet;
    }
</style>