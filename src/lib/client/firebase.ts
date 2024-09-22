import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { browser } from '$app/environment';
import type { Analytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: "AIzaSyDrAfkZF76QCVXH1c6-9-BRy0OrWuo-xxA",
	authDomain: "pegaso-df928.firebaseapp.com",
	projectId: "pegaso-df928",
	storageBucket: "pegaso-df928.appspot.com",
	messagingSenderId: "529298343744",
	appId: "1:529298343744:web:019e8b8e8f5f5d5c641ca5",
	measurementId: "G-9CZ8B7C9JL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let analytics: Analytics;
if (browser) {
	analytics = getAnalytics(app);
}

export { analytics, app };
