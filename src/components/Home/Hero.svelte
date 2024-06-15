
<script>
    import Mockup from "$lib/images/mockup.png";
</script>

<header class="grid lg:grid-cols-4 place-items-center relative py-5">

    <div class="col-span-2 w-100">
        <span class="created-by">By: @imlargo</span>
        <h1 class="text-3xl lg:text-4xl xl:text-6xl font-bold text-start mt-2">Crea tu horario<br>con Pegaso</h1>
        <p class="text-lg mt-4 max-w-2xl text-slate-600 text-start">Una aplicación diseñada para la creación de horarios y enfocada en brindar información esencial con el objetivo de mejorar la experiencia de los estudiantes de la sede Medellín.</p>

        <div class="d-flex gap-3 mt-5">
            <a data-sveltekit-reload href="/app" class="rounded-full px-6 py-2.5 font-medium text-center btn-primary">Empieza ahora</a>
            <a data-sveltekit-reload href="/about" class="rounded px-6 py-2.5 font-medium text-center btn-secondary">Leer más <i class="bi bi-arrow-right"></i></a>
        </div>
    </div>

    <div class="col-span-2 w-100">
        <img src={Mockup} draggable="false" class="" alt="mockup" >
    </div>
</header>

<section class="grid gap-16 grid-cols-3 py-4 rounded-full">

    <div class="d-flex justify-content-center align-items-end">
        <i class="bi bi-plus font-bold text-4xl tracking-tight"></i>
        <div>
            <span>Asignaturas</span>
            <h1 class="font-bold text-4xl tracking-tight">2.450</h1>
        </div>
    </div>

    <div class="d-flex justify-content-center align-items-end">
        <i class="bi bi-arrow-up font-bold text-4xl tracking-tight"></i>
        <div>
            <span>Usuarios</span>
            <h1 class="font-bold text-4xl tracking-tight">1.300</h1>
        </div>
    </div>

    <div class="d-flex justify-content-center align-items-end">
        <i class="bi bi-plus font-bold text-4xl tracking-tight"></i>
        <div>
            <span>Electivas</span>
            <h1 class="font-bold text-4xl tracking-tight">0</h1>
        </div>
    </div>

</section>

<style lang="scss">

    img {
        width: 100%;
        height: auto;
        position: relative;
        z-index: 1;
        
        filter: drop-shadow(rgb(224, 197, 255) 0.5rem 0.5rem 1rem);
    }

    .created-by {
        font-family: 'JetBrains Mono', monospace;
        background: linear-gradient(90deg, #9335ff 40%, #bf35ff 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    header {
        display: grid;
    }
    section {
        background-color: rgb(229, 206, 255);
    }


    .btn-primary {
        background: linear-gradient(90deg, #a85cff 40%, rgba(198,92,255,1) 100%);
        color: white;

        &:hover {
            background: #983fff;
        }
    }

    .btn-secondary {
        color: #9335ff;
    }

</style>