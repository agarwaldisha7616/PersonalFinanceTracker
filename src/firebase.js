// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzwgWWVhGQaB8FVDHajeKkjyZNJtaCEKI",
  authDomain: "financely-rec-01.firebaseapp.com",
  projectId: "financely-rec-01",
  storageBucket: "financely-rec-01.appspot.com",
  messagingSenderId: "665767173049",
  appId: "1:665767173049:web:182c5127d58b4a49fc3468",
  measurementId: "G-B24WW93L2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
