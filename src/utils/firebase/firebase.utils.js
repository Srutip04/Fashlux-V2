// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBOU88AgCO7i5SYauDnPMAkfKPnaRJhKMM",
  authDomain: "fashlux-db.firebaseapp.com",
  projectId: "fashlux-db",
  storageBucket: "fashlux-db.appspot.com",
  messagingSenderId: "316762325670",
  appId: "1:316762325670:web:bd87786f1253f5e1ae6a67",
  measurementId: "G-CWY0HDRB79",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup= () => signInWithPopup(auth,provider);