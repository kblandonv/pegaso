<script>
    const { seleccion, horario } = $props();
	import { normalizeString } from '$lib/utils/utils.js';
	import { fade } from 'svelte/transition';
</script>

<div transition:fade={{ duration: 400 }} class={`text-xs px-2 py-2 rounded m-1 evento dia-${normalizeString(horario.dia)} start-${parseInt(horario.inicio.split(":")[0])} end-${horario.fin.split(":")[0]} ${seleccion.color}`}>
	<span>{seleccion.materia.nombre}</span>
</div>

<style>

	.evento {

		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		transition: all 400ms;

		/*
		&::before {
			
			background-color: rgb(192, 136, 255);
    		border-radius: 2px;
    		left: -0rem;
    		content: "";
    		display: block;
    		height: 100%;
    		position: absolute;
    		width: calc(0.25em);
    		top: 50%;
    		transform: translateY(-50%);
			
		}
		*/
	}

    .color-1 {
		background-color: #ffdede;
	}

	.color-2 {
		background-color: #ffb7b7;
	}

	.color-3 {
		background-color: #fff5c3;
	}

	.color-4 {
		background-color: #d1fff9;
	}

	.color-5 {
		background-color: #cfffdf;
	}

	.color-6 {
		background-color: #ffbaec;
	}

	.color-7 {
		background-color: #cbceff;
	}

	.color-8 {
		background-color: #acff9b;
	}

	.color-9 {
		background-color: #e4d5ff;
	}

	.color-10 {
		background-color: #dcb9ff;
	}

	.color-11 {
		background-color: #ffd5f5;
	}

	.color-12 {
		background-color: #f7d1ff;
	}

	.start-6 {
		grid-row-start: 1;
	}

	.start-7 {
		grid-row-start: 2;
	}

	.start-8 {
		grid-row-start: 3;
	}

	.start-9 {
		grid-row-start: 4;
	}

	.start-10 {
		grid-row-start: 5;
	}

	.start-11 {
		grid-row-start: 6;
	}

	.start-12 {
		grid-row-start: 7;
	}

	.start-13 {
		grid-row-start: 8;
	}

	.start-14 {
		grid-row-start: 9;
	}

	.start-15 {
		grid-row-start: 10;
	}

	.start-16 {
		grid-row-start: 11;
	}

	.start-17 {
		grid-row-start: 12;
	}

	.start-18 {
		grid-row-start: 13;
	}

	.start-19 {
		grid-row-start: 14;
	}

	.end-7 {
		grid-row-end: 2;
	}
	.end-8 {
		grid-row-end: 3;
	}
	.end-9 {
		grid-row-end: 4;
	}
	.end-10 {
		grid-row-end: 5;
	}
	.end-11 {
		grid-row-end: 6;
	}
	.end-12 {
		grid-row-end: 7;
	}
	.end-13 {
		grid-row-end: 8;
	}
	.end-14 {
		grid-row-end: 9;
	}
	.end-15 {
		grid-row-end: 10;
	}
	.end-16 {
		grid-row-end: 11;
	}
	.end-17 {
		grid-row-end: 12;
	}
	.end-18 {
		grid-row-end: 13;
	}
	.end-19 {
		grid-row-end: 14;
	}
	.end-20 {
		grid-row-end: 15;
	}

	.dia-lunes {
		grid-column-start: 1;
	}

	.dia-martes {
		grid-column-start: 2;
	}

	.dia-miercoles {
		grid-column-start: 3;
	}

	.dia-jueves {
		grid-column-start: 4;
	}

	.dia-viernes {
		grid-column-start: 5;
	}

	.dia-sabado {
		grid-column-start: 6;
	}

	.dia-domingo {
		grid-column-start: 7;
	}
</style>