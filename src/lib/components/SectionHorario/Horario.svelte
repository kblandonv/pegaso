<script>
	import Seleccionadas from "$lib/components/SectionHorario/Seleccionadas.svelte";
</script>


<section class="rounded container px-3 py-4 my-4 glass">

    <Seleccionadas />
    
    <div class="rounded-top border p-3 font-bold d-flex justify-content-between align-items-center">
        <h2>Horario</h2>

        <div class="d-flex justify-content-between">
            <button class="btn btn-sm btn-descargar" id="btn-descargar">
                <div class="d-flex gap-1">
                    <i class="bi bi-download"></i>
                    Descargar
                </div>
            </button>
        </div>
    </div>

    <table class="table-fixed w-full text-center my-border rounded" id="calendar">
        <thead>
            <tr>
                <th class="my-border px-4 py-2">Hora</th>
                <th class="my-border px-4 py-2">Lunes</th>
                <th class="my-border px-4 py-2">Martes</th>
                <th class="my-border px-4 py-2">Miércoles</th>
                <th class="my-border px-4 py-2">Jueves</th>
                <th class="my-border px-4 py-2">Viernes</th>
                <th class="my-border px-4 py-2">Sábado</th>
                <th class="my-border px-4 py-2">Domingo</th>
            </tr>
        </thead>
        <tbody id="calendar-body">
            <tr id="hora-6">
                <td class="my-border px-4 py-2 opacity-60">6:00 - 7:00</td>
                <td id="lunes" class="celda-horario my-border px-4 py-2"></td>
                <td id="martes" class="celda-horario my-border px-4 py-2"></td>
                <td id="miercoles" class="celda-horario my-border px-4 py-2"></td>
                <td id="jueves" class="celda-horario my-border px-4 py-2"></td>
                <td id="viernes" class="celda-horario my-border px-4 py-2"></td>
                <td id="sabado" class="celda-horario my-border px-4 py-2"></td>
                <td id="domingo" class="celda-horario my-border px-4 py-2"></td>
            </tr>
            <tr id="hora-7">
                <td class="my-border px-4 py-2 opacity-60">7:00 - 8:00</td>
                <td id="lunes" class="celda-horario my-border px-4 py-2"></td>
                <td id="martes" class="celda-horario my-border px-4 py-2"></td>
                <td id="miercoles" class="celda-horario my-border px-4 py-2"></td>
                <td id="jueves" class="celda-horario my-border px-4 py-2"></td>
                <td id="viernes" class="celda-horario my-border px-4 py-2"></td>
                <td id="sabado" class="celda-horario my-border px-4 py-2"></td>
                <td id="domingo" class="celda-horario my-border px-4 py-2"></td>
            </tr>
            <tr id="hora-8">
                <td class="my-border px-4 py-2 opacity-60">8:00 - 9:00</td>
                <td id="lunes" class="celda-horario my-border px-4 py-2"></td>
                <td id="martes" class="celda-horario my-border px-4 py-2"></td>
                <td id="miercoles" class="celda-horario my-border px-4 py-2"></td>
                <td id="jueves" class="celda-horario my-border px-4 py-2"></td>
                <td id="viernes" class="celda-horario my-border px-4 py-2"></td>
                <td id="sabado" class="celda-horario my-border px-4 py-2"></td>
                <td id="domingo" class="celda-horario my-border px-4 py-2"></td>
            </tr>
            <tr id="hora-9">
                <td class="my-border px-4 py-2 opacity-60">9:00 - 10:00</td>
                <td id="lunes" class="celda-horario my-border px-4 py-2"></td>
                <td id="martes" class="celda-horario my-border px-4 py-2"></td>
                <td id="miercoles" class="celda-horario my-border px-4 py-2"></td>
                <td id="jueves" class="celda-horario my-border px-4 py-2"></td>
                <td id="viernes" class="celda-horario my-border px-4 py-2"></td>
                <td id="sabado" class="celda-horario my-border px-4 py-2"></td>
                <td id="domingo" class="celda-horario my-border px-4 py-2"></td>
            </tr>
            <tr id="hora-10">
                <td class="my-border px-4 py-2 opacity-60">10:00 - 11:00</td>
                <td id="lunes" class="celda-horario my-border px-4 py-2"></td>
                <td id="martes" class="celda-horario my-border px-4 py-2"></td>
                <td id="miercoles" class="celda-horario my-border px-4 py-2"></td>
                <td id="jueves" class="celda-horario my-border px-4 py-2"></td>
                <td id="viernes" class="celda-horario my-border px-4 py-2"></td>
                <td id="sabado" class="celda-horario my-border px-4 py-2"></td>
                <td id="domingo" class="celda-horario my-border px-4 py-2"></td>
            </tr>
            <tr id="hora-11">
                <td class="my-border px-4 py-2 opacity-60">11:00 - 12:00</td>
                <td id="lunes" class="celda-horario my-border px-4 py-2"></td>
                <td id="martes" class="celda-horario my-border px-4 py-2"></td>
                <td id="miercoles" class="celda-horario my-border px-4 py-2"></td>
                <td id="jueves" class="celda-horario my-border px-4 py-2"></td>
                <td id="viernes" class="celda-horario my-border px-4 py-2"></td>
                <td id="sabado" class="celda-horario my-border px-4 py-2"></td>
                <td id="domingo" class="celda-horario my-border px-4 py-2"></td>
            </tr>
            <tr id="hora-12">
                <td class="my-border px-4 py-2 opacity-60">12:00 - 1:00</td>
                <td id="lunes" class="celda-horario my-border px-4 py-2"></td>
                <td id="martes" class="celda-horario my-border px-4 py-2"></td>
                <td id="miercoles" class="celda-horario my-border px-4 py-2"></td>
                <td id="jueves" class="celda-horario my-border px-4 py-2"></td>
                <td id="viernes" class="celda-horario my-border px-4 py-2"></td>
                <td id="sabado" class="celda-horario my-border px-4 py-2"></td>
                <td id="domingo" class="celda-horario my-border px-4 py-2"></td>
            </tr>
            <tr id="hora-13">
                <td class="my-border px-4 py-2 opacity-60">1:00 - 2:00</td>
                <td id="lunes" class="celda-horario my-border px-4 py-2"></td>
                <td id="martes" class="celda-horario my-border px-4 py-2"></td>
                <td id="miercoles" class="celda-horario my-border px-4 py-2"></td>
                <td id="jueves" class="celda-horario my-border px-4 py-2"></td>
                <td id="viernes" class="celda-horario my-border px-4 py-2"></td>
                <td id="sabado" class="celda-horario my-border px-4 py-2"></td>
                <td id="domingo" class="celda-horario my-border px-4 py-2"></td>
            </tr>
            <tr id="hora-14">
                <td class="my-border px-4 py-2 opacity-60">2:00 - 3:00</td>
                <td id="lunes" class="celda-horario my-border px-4 py-2"></td>
                <td id="martes" class="celda-horario my-border px-4 py-2"></td>
                <td id="miercoles" class="celda-horario my-border px-4 py-2"></td>
                <td id="jueves" class="celda-horario my-border px-4 py-2"></td>
                <td id="viernes" class="celda-horario my-border px-4 py-2"></td>
                <td id="sabado" class="celda-horario my-border px-4 py-2"></td>
                <td id="domingo" class="celda-horario my-border px-4 py-2"></td>
            </tr>
            <tr id="hora-15">
                <td class="my-border px-4 py-2 opacity-60">3:00 - 4:00</td>
                <td id="lunes" class="celda-horario my-border px-4 py-2"></td>
                <td id="martes" class="celda-horario my-border px-4 py-2"></td>
                <td id="miercoles" class="celda-horario my-border px-4 py-2"></td>
                <td id="jueves" class="celda-horario my-border px-4 py-2"></td>
                <td id="viernes" class="celda-horario my-border px-4 py-2"></td>
                <td id="sabado" class="celda-horario my-border px-4 py-2"></td>
                <td id="domingo" class="celda-horario my-border px-4 py-2"></td>
            </tr>
            <tr id="hora-16">
                <td class="my-border px-4 py-2 opacity-60">4:00 - 5:00</td>
                <td id="lunes" class="celda-horario my-border px-4 py-2"></td>
                <td id="martes" class="celda-horario my-border px-4 py-2"></td>
                <td id="miercoles" class="celda-horario my-border px-4 py-2"></td>
                <td id="jueves" class="celda-horario my-border px-4 py-2"></td>
                <td id="viernes" class="celda-horario my-border px-4 py-2"></td>
                <td id="sabado" class="celda-horario my-border px-4 py-2"></td>
                <td id="domingo" class="celda-horario my-border px-4 py-2"></td>
            </tr>
            <tr id="hora-17">
                <td class="my-border px-4 py-2 opacity-60">5:00 - 6:00</td>
                <td id="lunes" class="celda-horario my-border px-4 py-2"></td>
                <td id="martes" class="celda-horario my-border px-4 py-2"></td>
                <td id="miercoles" class="celda-horario my-border px-4 py-2"></td>
                <td id="jueves" class="celda-horario my-border px-4 py-2"></td>
                <td id="viernes" class="celda-horario my-border px-4 py-2"></td>
                <td id="sabado" class="celda-horario my-border px-4 py-2"></td>
                <td id="domingo" class="celda-horario my-border px-4 py-2"></td>
            </tr>
            <tr id="hora-18">
                <td class="my-border px-4 py-2 opacity-60">6:00 - 7:00</td>
                <td id="lunes" class="celda-horario my-border px-4 py-2"></td>
                <td id="martes" class="celda-horario my-border px-4 py-2"></td>
                <td id="miercoles" class="celda-horario my-border px-4 py-2"></td>
                <td id="jueves" class="celda-horario my-border px-4 py-2"></td>
                <td id="viernes" class="celda-horario my-border px-4 py-2"></td>
                <td id="sabado" class="celda-horario my-border px-4 py-2"></td>
                <td id="domingo" class="celda-horario my-border px-4 py-2"></td>
            </tr>
            <tr id="hora-19">
                <td class="my-border px-4 py-2 opacity-60">7:00 - 8:00</td>
                <td id="lunes" class="celda-horario my-border px-4 py-2"></td>
                <td id="martes" class="celda-horario my-border px-4 py-2"></td>
                <td id="miercoles" class="celda-horario my-border px-4 py-2"></td>
                <td id="jueves" class="celda-horario my-border px-4 py-2"></td>
                <td id="viernes" class="celda-horario my-border px-4 py-2"></td>
                <td id="sabado" class="celda-horario my-border px-4 py-2"></td>
                <td id="domingo" class="celda-horario my-border px-4 py-2"></td>
            </tr>
        </tbody>
    </table>
</section>