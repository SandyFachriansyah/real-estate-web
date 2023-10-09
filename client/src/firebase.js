// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-web-7daeb.firebaseapp.com",
  projectId: "real-estate-web-7daeb",
  storageBucket: "real-estate-web-7daeb.appspot.com",
  messagingSenderId: "901637815633",
  appId: "1:901637815633:web:f5c61f4e338d3390e4a770",
  measurementId: "G-FMDFBXQ829"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
