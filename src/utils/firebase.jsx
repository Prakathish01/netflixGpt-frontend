// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZEass7_9b14_-jpwyEEzxIktrNYVmYqM",
  authDomain: "netflixgpt-015.firebaseapp.com",
  projectId: "netflixgpt-015",
  storageBucket: "netflixgpt-015.firebasestorage.app",
  messagingSenderId: "198149372314",
  appId: "1:198149372314:web:a8c6a88a53508811a0a223",
  measurementId: "G-RLRGJY36MB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth(app);
