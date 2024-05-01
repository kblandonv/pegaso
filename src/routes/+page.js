export const csr = true;
import { browser } from '$app/environment'

export async function load({ params }) {

    const url = "https://raw.githubusercontent.com/imlargo/api/main/data.json";
    const uniqueUrl = url + "?t=" + Date.now();

    const raw = await fetch(uniqueUrl, {
        method: 'GET',
        cache: 'no-store'
    });
    const data = await raw.json();

    let horarioLocal = null;
    if (browser) {
		horarioLocal = localStorage.getItem("horarioLocal");
	}

	return {
        asignaturas: data,
        horarioLocal: horarioLocal ? JSON.parse(horarioLocal) : null,
    };
}