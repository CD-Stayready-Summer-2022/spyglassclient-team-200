// Import the functions you need from the SDKs you need
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import { initializeApp } from "firebase/app";
import { ToastContainer, toast } from "react-toastify";

import{ GoogleAuthProvider, 
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc
} from 'firebase/firestore'


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBB_IHTe7vxts_rOeOwrnC15pAw9-pGox0",
  authDomain: "tn-sr-firebase-demo.firebaseapp.com",
  projectId: "tn-sr-firebase-demo",
  storageBucket: "tn-sr-firebase-demo.appspot.com",
  messagingSenderId: "142046766590",
  appId: "1:142046766590:web:4073e7baaeb423a72c8caf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const logInWithEmailAndPassword = async (email, password) => {
  console.log(email);
  try {
     return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  }
};