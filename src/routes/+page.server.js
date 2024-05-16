import { APIKEY, AUTHDOMAIN, DATABASEURL, PROJECTID, STORAGEBUCKET, MESSAGINGSENDERID, APPID, MEASUREMENTID, } from "$env/static/private"
import { loadAsignaturas } from "$lib/utils/loadAsignaturas";

export async function load({ params }) {
    
    const asignaturas = await loadAsignaturas();

    return {
        asignaturas: asignaturas,
        firebaseConfig: {
            apiKey: APIKEY,
            authDomain: AUTHDOMAIN,
            databaseURL: DATABASEURL,
            projectId: PROJECTID,
            storageBucket: STORAGEBUCKET,
            messagingSenderId: MESSAGINGSENDERID,
            appId: APPID,
            measurementId: MEASUREMENTID,
        }
    };
}