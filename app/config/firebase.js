import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export const actionCodeSettings = {
	url: process.env.REACT_APP_FIREBASE_REDIRECT_URI,
	handleCodeInApp: true,
};

let instance;

export default function getFirebase() {
	if (typeof window !== 'undefined') {
		if (instance) return instance;
		instance = firebase.initializeApp(firebaseConfig);
		firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
		return instance;
	}

	return null;
}
