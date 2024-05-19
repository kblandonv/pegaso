<script>
</script>

<div class="d-flex align-items-center">
    <span class="px-2 rounded-2 text-xs">
        <slot></slot>
    </span>
</div>


<style lang="scss">

    span {
        font-family: "JetBrains Mono", monospace;
        height: min-content;
        padding: 0.2rem 0.8rem;
        outline: none;
        text-decoration: none!important;
        border-radius: 9999px;

        box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px inset, rgba(79, 70, 229, 0.1) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
        width: fit-content;
        font-weight: 600;
        -webkit-font-smoothing: antialiased;

        --badget-color: rgb(165, 70, 229);
        color: var(--badget-color);
        border: 1px var(--badget-color) solid;
        background-color: rgb(165, 70, 229, 0.1);
    }
</style>