// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:  process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflixgpt-28e2a.firebaseapp.com",
  projectId: "netflixgpt-28e2a",
  storageBucket: "netflixgpt-28e2a.appspot.com",
  messagingSenderId: "663652696572",
  appId: "1:663652696572:web:358a2cc4c773bb84a47279",
  measurementId: "G-NQM8V9X6QF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();