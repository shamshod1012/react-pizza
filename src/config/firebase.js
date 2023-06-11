import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaS3as5UcNK0rdbCIiAxHOetfGTA-FEgY",
  authDomain: "react-pizza-23335.firebaseapp.com",
  projectId: "react-pizza-23335",
  storageBucket: "react-pizza-23335.appspot.com",
  messagingSenderId: "214263300136",
  appId: "1:214263300136:web:b2fd5d4c3673aeb4fcf51d",
  measurementId: "G-TPTMG3YP53",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
