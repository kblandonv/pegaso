<script>
</script>

<section class="container px-4 py-4 my-4 rounded-3">
    <div class="p-2 px-3">
        <slot></slot>
    </div>
    
</section>

<style lang="scss">
    section {
        background-color: var(--container);
        border: 1px solid var(--container-stroke);
        box-shadow: 4px 4px 4px var(--container-shadow-bottom), -4px -4px 4px var(--container-shadow-top);

        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
    }
</style>