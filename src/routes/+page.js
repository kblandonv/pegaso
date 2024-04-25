// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;
export const csr = true;

export async function load({ params }) {

    const url = "https://raw.githubusercontent.com/imlargo/api/main/data.json";
    const uniqueUrl = url + "?t=" + Date.now();

    const raw = await fetch(uniqueUrl, {
        method: 'GET',
        cache: 'no-store'
    });
    const data = await raw.json();

    console.log(data);

	return {
        loadedData: data,
    };
}