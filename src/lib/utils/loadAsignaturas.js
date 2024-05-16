export async function loadAsignaturas() {
    const url = "https://raw.githubusercontent.com/imlargo/api/main/data.json";
    const asignaturas = await fetch(url + "?t=" + Date.now()).then(res => res.json());
    return asignaturas;
}