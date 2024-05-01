import { APIKEY, AUTHDOMAIN, DATABASEURL, PROJECTID, STORAGEBUCKET, MESSAGINGSENDERID, APPID, MEASUREMENTID, } from "$env/static/private"


export async function load({ params }) {
    return {
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