
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBod7zbD6yoG7cLT64wWCDwgje14PaG934",
  authDomain: "note-74d71.firebaseapp.com",
  projectId: "note-74d71",
  storageBucket: "note-74d71.appspot.com",
  messagingSenderId: "757374777810",
  appId: "1:757374777810:web:8afd91b4132a48318cb00b",
  measurementId: "G-65NRY6XGBN"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);