// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD19PGMv8IeerkEiWyGgv35E2suK6fedvo",
  authDomain: "expense-tracker-81e43.firebaseapp.com",
  projectId: "expense-tracker-81e43",
  storageBucket: "expense-tracker-81e43.appspot.com",
  messagingSenderId: "143730337839",
  appId: "1:143730337839:web:c7e5c478dc2d6692607eda",
  measurementId: "G-4F20YGDEZ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

//firebase login
//firebse init
//firebase deploy
