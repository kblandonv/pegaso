import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

export function init(firebaseConfig) {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app)
    return () => { logEvent(analytics, 'descarga'); }
}