import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

(async () => {
	const raw = await fetch("assets/data.json");
    const data = await raw.json();

	ReactDOM.createRoot(document.getElementById('root')).render(
		<React.StrictMode>
			<App data={data} />
		</React.StrictMode>,
	)
})();



import React, { useState, useEffect } from 'react';

const MyComponent = ({ data }) => {
	const [facultades, setFacultades] = useState([]);
	const [facultad, setFacultad] = useState("");
	const [carrera, setCarrera] = useState("");
	const [tipologia, setTipologia] = useState("");
	const [materias, setMaterias] = useState([]);

	setFacultades(Object.keys(data));

	return (
		<div>
			<select value={facultad} onChange={e => setFacultad(e.target.value)}>
				{facultades.map(facultad => <option key={facultad} value={facultad}>{facultad}</option>)}
			</select>
			<select value={carrera} onChange={e => setCarrera(e.target.value)}>
				{data && facultad && Object.keys(data[facultad]).map(carrera => <option key={carrera} value={carrera}>{carrera}</option>)}
			</select>
			<select value={tipologia} onChange={e => setTipologia(e.target.value)}>
				{data && facultad && carrera && ["TODAS LAS ASIGNATURAS", ...new Set(data[facultad][carrera].map(materia => materia.tipologia))].map(tipologia => <option key={tipologia} value={tipologia}>{tipologia}</option>)}
			</select>
		</div>
	);
};

export default MyComponent;