<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>imlargo - Buscador Cursos</title>
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Boostrap 5 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"></script>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <!-- Scripts -->
    <script src="src/analytics.js" type="module"></script>
    <script src="src/index.js" defer></script>
    <link rel="stylesheet" href="src/global.css">
    <script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"></script>

    <script>
        window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
    </script>
    <script defer src="/_vercel/insights/script.js"></script>
</head>

<body>

    <main class="container main-section">

        <!-- Buscador de cursos -->
        <section class="rounded container px-3 py-4 mt-3 mb-4 glass">

            <div class="row align-items-center mb-4">
                <div class="col">
                    <label id="label-facultad" class="label-dropdown">Facultad</label>
                    <select id="facultad" class="mt-2 form-select form-select-sm"></select>
                </div>
                <div class="col">
                    <label class="label-dropdown">Plan de estudios</label>
                    <select id="carrera" class="mt-2 form-select form-select-sm"></select>
                </div>
                <div class="col">
                    <label class="label-dropdown">Tipologia de asignatura</label>
                    <select id="tipologia" class="mt-2 form-select form-select-sm"></select>
                </div>
            </div>

            <hr class="hr-pink">

            <div class="d-flex justify-content-between">

                <strong id="last-update" class="mt-4 font-my-mono">Nota: el sitio web aun esta en construccion
                    :)</strong>
                <p class="mt-4 font-my-mono">Nota: el sitio web aun esta en construccion :)</p>

            </div>

            <details id="collapse-materias" class="mt-4">
                <summary class="rounded-top py-2 px-3 font-bold">
                    <div class="d-flex justify-content-between">
                        <span id="asignaturas-cargadas">Asignaturas cargadas: 0</span>
                        <i class="bi bi-chevron-down"></i>
                    </div>
                </summary>
                <table class="table-auto w-full my-border rounded mb-4 my-table-hover">
                    <thead class="text-center">
                        <tr>
                            <th class="my-border px-4 py-2">Código</th>
                            <th class="my-border px-4 py-2">Créditos</th>
                            <th class="my-border px-4 py-2">Nombre</th>
                            <th class="my-border px-4 py-2">Agregar al horario</th>
                            <th class="my-border px-4 py-2">Tipologia</th>
                            <th class="my-border px-4 py-2">Cupos</th>
                        </tr>
                    </thead>
                    <tbody id="materias">
                    </tbody>
                </table>
            </details>

        </section>

        <hr class="hr-pink">

        <!-- Horario -->
        <section class="rounded container px-3 py-4 my-4 glass">
            <details open class="mb-4">
                <summary class="rounded-top py-2 px-4 font-bold">
                    <div class="d-flex justify-content-between">
                        <span id="asignaturas-seleccionadas">Asignaturas seleccionadas: 0</span>
                        <span id="total-creditos">Total Creditos: 0</span>
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
                    </tbody>
                </table>
            </details>

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

        <section class="rounded container px-3 py-4 my-4 glass">
            <div class="row align-items-center mb-4">
                <div class="col">
                    <label id="label-facultad" class="label-dropdown">Facultad</label>
                    <select id="analisis-facultad" class="mt-2 form-select form-select-sm"></select>
                </div>
                <div class="col">
                    <label class="label-dropdown">Plan de estudios</label>
                    <select id="analisis-carrera" class="mt-2 form-select form-select-sm"></select>
                </div>
                <div class="col">
                    <label class="label-dropdown">Tipologia de asignatura</label>
                    <select id="analisis-tipologia" class="mt-2 form-select form-select-sm"></select>
                </div>
                <div class="col">
                    <label class="label-dropdown">Asignatura</label>
                    <select id="analisis-materia" class="mt-2 form-select form-select-sm"></select>
                </div>
            </div>

            <hr class="hr-pink">

            <!-- Grafico -->
            <div class="p-3">
                <!-- titulo del grafico -->
                <label class="label mb-4" id="tlGrafico"></label>

                <!-- Contenedor del grafico -->
                <div class="chart-container" id="graphContainer">
                    <canvas id="graphCanvas"></canvas>
                </div>
            </div>

        </section>

    </main>

</body>

</html>