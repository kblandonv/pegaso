
<script>
    import Mockup from "$lib/images/mockup.png";
</script>

<header class="grid lg:grid-cols-4 place-items-center relative py-5">

    <div class="col-span-2">
        <h1 class="text-3xl lg:text-4xl xl:text-6xl font-bold text-start">Titulo</h1>
        <p class="text-lg mt-4 max-w-lg text-slate-600 text-start">Una aplicación diseñada para la creación de horarios y enfocada en brindar información esencial con el objetivo de mejorar la experiencia de los estudiantes de la sede Medellín.</p>

        <div class="d-flex gap-3 mt-4">
            <button class="btn btn-info">Accion 1</button>
            <button class="btn btn-info">Accion 2</button>
        </div>
    </div>

    <div class="col-span-2">
        <img src={Mockup} draggable="false" class="" alt="mockup" >
    </div>
</header>

<section class="text-center py-5 rounded">
    <h1 class="text-lg font-semibold">
        <i class="bi bi-heart"></i>
        <span>+3000 usuarios</span>
    </h1>
</section>

<style>

    img {
        width: 100%;
        height: auto;
        position: relative;
        z-index: 1;
        
        filter: drop-shadow(rgb(224, 197, 255) 0.5rem 0.5rem 1rem);
    }

    header {
        display: grid;
    }

    section {
        background-color: rgb(229, 206, 255);
    }
</style>