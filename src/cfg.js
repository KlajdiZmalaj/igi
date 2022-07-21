// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRQjcXnVXqdim4Mx7Heo24SY27GsfyxYA",
  authDomain: "savedata-6ffef.firebaseapp.com",
  projectId: "savedata-6ffef",
  storageBucket: "savedata-6ffef.appspot.com",
  messagingSenderId: "639926766601",
  appId: "1:639926766601:web:6a1d5bb9d2f9a48520fcd8",
  measurementId: "G-LM2BPZJYFC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
