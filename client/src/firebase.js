// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-524c5.firebaseapp.com",
  projectId: "real-estate-524c5",
  storageBucket: "real-estate-524c5.appspot.com",
  messagingSenderId: "105171153187",
  appId: "1:105171153187:web:748e6dd9ae8369d4211c96"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);