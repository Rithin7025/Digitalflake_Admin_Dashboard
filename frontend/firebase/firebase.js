
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "digitalflake-admin-dashboard.firebaseapp.com",
  projectId: "digitalflake-admin-dashboard",
  storageBucket: "digitalflake-admin-dashboard.appspot.com",
  messagingSenderId: "189839343420",
  appId: "1:189839343420:web:6e7d9ca281c625c87ae839"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);