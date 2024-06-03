<script>
	import '$src/styles/about.scss';
</script>

<div class="content">
	<section id="presentation" use:observeAction>
		<h2>Presentando Pegaso V1</h2>
		<p>
			Pegaso es una aplicación web rápida y robusta diseñada para la creación de horarios y enfocada en brindar información esencial para optimizar y mejorar la experiencia de los estudiantes de la sede Medellín, haciendo el proceso de inscripción de asignaturas y organización de horarios más eficiente, rápido y sencillo para los estudiantes.
		</p>
		<p>
			Pegaso va más allá de la creación de horarios. Gracias a su conjunto de herramientas, ofrece una experiencia agradable y completa a los estudiantes, permitiéndoles:
		</p>
	</section>

	<section id="presentation-2" use:observeAction>
		<h5>Busquedas instantaneas</h5>

		<ul>

			<li>
				<p>No más búsquedas manuales ni información desactualizada, experiencia de selección de asignaturas rapida e instantanea. Selecciona las asignaturas que necesitas en un abrir y cerrar de ojos, sin necesidad de ingresar información manualmente y agregalas a tu horario.
				</p>
			</li>

			<li>
				<p>Datos en tiempo real: Los datos de asignaturas siempre están actualizados para garantizar la información más precisa, además de esto se actualizan constantemente sin necesidad de que debas recargar la página, lo que garantiza que siempre tenga acceso a la información más precisa en tiempo real.
				</p>
			</li>
		</ul>

		<h5>Información Completa para Decisiones Informadas:</h5>

		<p>Pegaso va más allá de la simple selección de cursos, pone a disposición del usuario y le brinda información y estadísticas valiosas:
		</p>
		<p>Comportamiento de los cupos por asignatura y por grupo: Analice los patrones de inscripción pasados ​​para comprender la popularidad del curso y predecir la probabilidad de obtener las clases que desea. sobre las tendencias de inscripción en cursos, lo que le permite tomar decisiones informadas basadas en datos históricos.  Visualice el comportamiento de los cupos en semestres pasados, tanto a nivel de asignatura como de grupo Análisis inteligente de cupos:, para tomar decisiones informadas sobre su inscripción. Sabrán con certeza si hay cupos disponibles y si podrán inscribirse en las asignaturas que deseen. 
		</p>
		<p>Docentes más seleccionados: recomendaciones basadas en Datos para una Orientación Personalizada: Aprovechando el poder del análisis de datos, Pegaso V1.0 ofrece recomendaciones de cursos personalizadas que se adaptan a sus intereses y objetivos académicos. Nuestro sistema analiza miles de cursos e identifica aquellos que se alinean con su perfil, ayudándole a descubrir nuevas oportunidades académicas. Docentes recomendados: Basándonos en un análisis de datos, les sugerimos docentes recomendados para cada una de las más de 3.000 asignaturas de la sede Medellín.
		</p>

		<p>Distribución de docentes Conozcan la distribución de cupos por docente en cada asignatura, permitiéndoles elegir la opción que mejor se adapte a sus necesidades y preferencias. para así saber cuales docentes son los que más inscriben y cuales son los que menos inscriben, para así evitar elegir los peores profes
		</p>

		<h5>Agradable de usar:</h5>

		<p>Pegaso V1.0 no solo es funcional, sino también intuitivo y agradable de usar:</p>
		<p>Detección Inteligente de Conflictos: ¡Despídase de los conflictos de programación! El sistema de detección de conflictos inteligente de Pegaso garantiza que nunca se inscriba inadvertidamente en cursos superpuestos. Nuestro sistema identifica posibles conflictos y proporciona advertencias claras, lo que le ahorra tiempo y frustración. Análisis inteligente para evitar cruces de horario: Pegaso realiza un análisis inteligente para evitar que seleccionen grupos que se crucen con los de otras asignaturas. Recibirán alertas en caso de conflictos, indicando la asignatura afectada. Identifica y evita conflictos incluso antes de seleccionar un grupo, avisando la asignatura con la q hay un conflicto
		</p>
		<p>Rendimiento y Usabilidad en Primer Plano está diseñado teniendo en cuenta la velocidad y la usabilidad. Nuestra aplicación liviana cuenta con una interfaz limpia y organizada, lo que la hace fácil de navegar y utilizar. Las actualizaciones de inscripción en tiempo real lo mantienen informado sin necesidad de actualizaciones constantes de la página. Diseño elegante y minimalista: Disfruten de una interfaz limpia y ordenada que facilita la navegación y la búsqueda de información. Velocidad y ligereza: Pegaso V1.0 está diseñado para ser rápido y ligero, ofreciendo una experiencia fluida y sin interrupciones. Actualizaciones de cupos en tiempo real: Reciban actualizaciones de cupos en tiempo real sin necesidad de actualizar la página manualmente. Con Pegaso V1.0, la selección de asignaturas ya no será un proceso tedioso y lleno de incertidumbre. ¡Optimice su tiempo, tome decisiones informadas y comience su semestre con el pie derecho!
		</p>
	</section>
</div>

<style lang="scss">
	.content {
        
		margin: 0;
		padding: 4em 0;
		border-bottom: 1px solid color(gray, 100);
		border-color: color(gray, 900);
		*:first-child {
			margin-top: 0;
		}
		img {
			max-width: 100%;
			height: auto;
			border-radius: 12px;
			border: 1px solid color(gray, 200);
		}

		ol,
		ul {
			padding-left: 2em;
			margin-bottom: 1em;
		}

		ul {
			
			list-style:disc;

			li {
				position: relative;
				margin-bottom: 0.75em;
				&::marker {
  					color: rgb(194, 90, 255);
				}

				&:before {
					content: '';
					display: block;
					position: absolute;
					left: -1em;
					top: 0.63em;
					width: 8px;
					height: 8px;
					background: linear-gradient(25deg, color(purple, 500), color(orange, 500));
					border-radius: 99px;
				}
			}
		}

	}
</style>
