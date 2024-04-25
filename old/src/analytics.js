import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyCB5Ba3CPzibr9nwCK2p3AZDHbJ25V5w5U",
    authDomain: "imlargo-sia.firebaseapp.com",
    projectId: "imlargo-sia",
    storageBucket: "imlargo-sia.appspot.com",
    messagingSenderId: "758516315000",
    appId: "1:758516315000:web:ae9a368ade09e0d0aace8d",
    measurementId: "G-YC4S4Q3Q3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);