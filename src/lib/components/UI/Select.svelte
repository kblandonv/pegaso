<script>
</script>

<select
	id="facultad"
	class="mt-2"
	bind:value={storeFiltro.valueFacultad}
	onchange={() => {
		storeFiltro.changeFacultad();
	}}
>
	<option selected value=""> -- Seleccionar -- </option>
	{#each storeFiltro.listadoFacultades as facultad (facultad)}
		<option value={facultad}>{facultad}</option>
	{/each}
</select>

<select name="" id=""></select>

<style lang="scss">
</style>
