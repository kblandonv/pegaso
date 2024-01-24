import { useState } from 'react'
import './App.css'

function BuscadorCursos({ data }) {

	const [facultad, setFacultad] = useState("Facultad de Ingeniería");
	const [carrera, setCarrera] = useState("Ingeniería de Sistemas");
	const [tipologia, setTipologia] = useState("TODAS LAS ASIGNATURAS");

	const [materias, setMaterias] = useState([]);

	const handleFacultad = (e) => setFacultad(e.target.value);
	const handleCarrera = (e) => setCarrera(e.target.value);
	const handleTipologia = (e) => {
		setTipologia(e.target.value)
		filtrarMaterias(facultad, carrera, e.target.value)
	};

	const filtrarMaterias = () => {
		const allMaterias = data[facultad][carrera];
		const isAll = tipologia === "TODAS LAS ASIGNATURAS";
		const filtrado = isAll ? allMaterias : allMaterias.filter(materia => materia.tipologia === tipologia);
		setMaterias(filtrado);
	}

	return (
		<>
			<select id="facultad" onChange={handleFacultad} className="mt-4 form-select form-select-sm">
				{
					Object.keys(data).map(facultad => (
						<option value={facultad}>{facultad}</option>
					))
				}
			</select>


			<select id="carrera" onChange={handleCarrera} className="mt-4 form-select form-select-sm">
				{
					Object.keys(data[facultad]).map(carrera => (
						<option value={carrera}>{carrera}</option>
					))
				}
			</select>

			<select id="tipologia" onChange={handleTipologia} className="my-4 form-select form-select-sm">
				<option value="TODAS LAS ASIGNATURAS">TODAS LAS ASIGNATURAS</option>
				{
					[
						...new Set(data[facultad][carrera].map(materia => materia.tipologia))
					].map(tipologia => (
						<option value={tipologia}>{tipologia}</option>
					))
				}
			</select>

			<TablaResultados materias={materias} />
		</>
	)
}


function TableRowMateria({ materia }) {

	const [isAgregado, setAgregado] = useState(false)
	const claseBoton = `btn btn-outline-${isAgregado ? "secondary" : "success"} my-button`;
	const handleAgregar = () => {
		setAgregado(true);
	};

	return (
		<tr >
			<td className="border px-2 text-center">{materia.codigo}</td>
			<td className="border px-2 text-center">{materia.creditos}</td>
			<td className="border px-2">{materia.nombre}</td>
			<td className="border px-2"><button disabled={isAgregado} onClick={handleAgregar} className={claseBoton}>+</button></td>
			<td className="border px-2 text-center">{materia.tipologia}</td>
			<td className="border px-2 text-center">{materia.grupos.length}</td>
		</tr>
	)
}


function TablaResultados({ materias }) {
	return (
		<table className="table-auto w-full border rounded my-4 my-table-hover">
			<thead className="text-center">
				<tr>
					<th className="border px-4 py-2">Código</th>
					<th className="border px-4 py-2">Créditos</th>
					<th className="border px-4 py-2">Nombre</th>
					<th className="border px-4 py-2">Agregar al horario</th>
					<th className="border px-4 py-2">Tipologia</th>
					<th className="border px-4 py-2">Grupos</th>
				</tr>
			</thead>
			<tbody id="materias">
				{materias.map((materia) => {
					return (
						<TableRowMateria materia={materia} />
					)
				})}
			</tbody>
		</table>
	)
}


function App({ data }) {

	return (
		<>
			<section className="container mt-5">
				<div className="container border rounded">
					<BuscadorCursos data={data} />
				</div>
			</section>
		</>
	)
}

export default App
