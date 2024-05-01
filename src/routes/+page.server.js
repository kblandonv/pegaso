import { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId } from "$env/static/private"


export async function load({ params }) {
	return {
        firebaseConfig: {
            apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId
        }
    };
}