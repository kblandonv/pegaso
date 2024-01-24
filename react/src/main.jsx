import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

(async () => {
	const raw = await fetch("src/assets/data.json");
    const data = await raw.json();

	ReactDOM.createRoot(document.getElementById('root')).render(
			<App data={data} />
	)
})();