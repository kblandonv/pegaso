import { useState, useEffect } from 'react'
import './App.css'

function BuscadorCursos({ data }) {

	const msgTodas = "TODAS LAS ASIGNATURAS";
	const [facultad, setFacultad] = useState(Object.keys(data)[0])
	const [carrera, setCarrera] = useState(Object.keys(data[facultad])[0]);
	const [tipologia, setTipologia] = useState(msgTodas);
	const [tipologias, setTipologias] = useState([]);
	const [materias, setMaterias] = useState([]);

	const handleFacultad = (e) => setFacultad(e.target.value);
	const handleCarrera = (e) => setCarrera(e.target.value);
	const handleTipologia = (e) => setTipologia(e.target.value);

	useEffect(() => {
		setCarrera(Object.keys(data[facultad])[0]);
	}, [facultad])

	useEffect(() => {
		const materias = data[facultad][carrera];
		const tipologias = [
			msgTodas,
			...new Set(materias.map(materia => materia.tipologia))
		];

		setTipologias(tipologias);
		setTipologia(msgTodas);
	}, [carrera])

	useEffect(() => {
		const allMaterias = data[facultad][carrera];
		const isAll = tipologia === msgTodas;
		const filtrado = isAll ? allMaterias : allMaterias.filter(materia => materia.tipologia === tipologia);
		setMaterias(filtrado);
		console.log(filtrado);
	}, [tipologia])


	return (
		<>
			<select id="facultad" onChange={handleFacultad} className="mt-4 form-select form-select-sm">
				{
					Object.keys(data).map((facultad, index) => (
						<option key={index} value={facultad}>{facultad}</option>
					))
				}
			</select>

			<select id="carrera" onChange={handleCarrera} className="mt-4 form-select form-select-sm">
				{
					Object.keys(data[facultad]).map((carr, index) => (
						<option key={index} value={carr}>{carr}</option>
					))
				}
			</select>

			<select id="tipologia" onChange={handleTipologia} className="my-4 form-select form-select-sm">
				{
					tipologias.map((tipologia, index) => (
						<option key={index} value={tipologia}>{tipologia}</option>
					))
				}
			</select>

			<TablaResultados materias={materias} />
		</>
	)
}
/*


			



	const filtrarMaterias = () => {
		const allMaterias = data[facultad][carrera];
		const isAll = tipologia === msgTodas;
		const filtrado = isAll ? allMaterias : allMaterias.filter(materia => materia.tipologia === tipologia);
		setMaterias(filtrado);
	}


const handleCarrera = (e) => {
		setCarrera(e.target.value);
		const tipologias = [
			...new Set(data[facultad][carrera].map(materia => materia.tipologia))
		];
		setTipologias(tipologias);

	};

const handleTipologia = (e) => {
		setTipologia(e.target.value)
		filtrarMaterias()
		console.log(materias);
	};

	
*/


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
