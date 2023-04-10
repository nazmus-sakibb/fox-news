// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4wCAEGdYDk7CoqmbQHFOkxsqaabRlNco",
  authDomain: "fox-news1.firebaseapp.com",
  projectId: "fox-news1",
  storageBucket: "fox-news1.appspot.com",
  messagingSenderId: "169151934756",
  appId: "1:169151934756:web:d64b253b8f223a2ca383b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;