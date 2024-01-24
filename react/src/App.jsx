import { useState, useEffect } from 'react'
import './App.css'
import TableSelected from './Selected.jsx'


function BuscadorCursos({ data, GLOBAL }) {

	const msgTodas = "TODAS LAS ASIGNATURAS";
	const [facultad, setFacultad] = useState(Object.keys(data)[0])
	const [carrera, setCarrera] = useState(Object.keys(data[facultad])[0]);
	const [tipologia, setTipologia] = useState(msgTodas);

	const [carreras, setCarreras] = useState(Object.keys(data[facultad]));
	const [tipologias, setTipologias] = useState(
		[
			...new Set(data[facultad][carrera].map(materia => materia.tipologia))
		]
	);
	const [materias, setMaterias] = useState([]);

	function filtrarMaterias() {
		const allMaterias = data[facultad][carrera];
		const isAll = tipologia === msgTodas;
		const filtrado = isAll ? allMaterias : allMaterias.filter(materia => materia.tipologia === tipologia);
		return filtrado;
	}

	const handleFacultad = (e) => {
		setFacultad(e.target.value);
		const carreras = Object.keys(data[e.target.value]);
		setCarreras(carreras);
		setCarrera(carreras[0]);
	};
	const handleCarrera = (e) => {
		setCarrera(e.target.value);
		const tipologias = [
			...new Set(data[facultad][e.target.value].map(materia => materia.tipologia))
		];
		setTipologias(tipologias);
		setTipologia(msgTodas);
	}
	const handleTipologia = (e) => {
		setTipologia(e.target.value)
		const materias = filtrarMaterias();
		setMaterias(materias);
	};

	useEffect(() => {
		const materias = filtrarMaterias();
		setMaterias(materias);
	}, [carrera, tipologia]);

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
					carreras.map((carr, index) => (
						<option key={index} value={carr}>{carr}</option>
					))
				}
			</select>

			<select defaultValue={msgTodas} id="tipologia" onChange={handleTipologia} className="my-4 form-select form-select-sm">
				<option value={msgTodas}>{msgTodas}</option>
				{
					tipologias.map((tipologia, index) => (
						<option key={index} value={tipologia}>{tipologia}</option>
					))
				}
			</select>

			<TablaResultados materias={materias} GLOBAL={GLOBAL} />
		</>
	)
}



function TableRowMateria({ materia, GLOBAL }) {

	const [isAgregado, setAgregado] = useState(false)
	const claseBoton = `btn btn-outline-${isAgregado ? "secondary" : "success"} my-button`;
	const handleAgregar = () => {
		GLOBAL.addMateria(materia);
	};
	
	useEffect(() => {
		setAgregado(materia.codigo in GLOBAL.MATERIAS);
	}, [GLOBAL.MATERIAS, materia.codigo]);

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


function TablaResultados({ materias, GLOBAL }) {
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
						<TableRowMateria materia={materia} GLOBAL={GLOBAL} />
					)
				})}
			</tbody>
		</table>
	)
}

function App({ data }) {

	const [MATERIAS, setGlobalMaterias] = useState({});

	const addMateria = (materia) => {
		const newM = { ...MATERIAS };
		newM[materia.codigo] = materia;
		setGlobalMaterias(newM);
	}

	const deleteMateria = (codigo) => {
		const newM = { ...MATERIAS };
		delete newM[codigo];
		setGlobalMaterias(newM);
	}

	const GLOBAL = {
		MATERIAS,
		addMateria,
		deleteMateria
	};

	return (
		<>
			<section className="container mt-5">
				<div className="container border rounded">
					<BuscadorCursos data={data} GLOBAL={GLOBAL} />
				</div>
			</section>

			<section class="container mt-4">
				<TableSelected GLOBAL={GLOBAL} />
			</section>
		</>
	)
}

export default App
