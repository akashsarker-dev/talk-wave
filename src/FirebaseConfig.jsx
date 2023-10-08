// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmQFbM-EqvRT9kuzTos8z5qDkVqvjMV8Y",
  authDomain: "talk-wave2023.firebaseapp.com",
  projectId: "talk-wave2023",
  storageBucket: "talk-wave2023.appspot.com",
  messagingSenderId: "455173202462",
  appId: "1:455173202462:web:e42427e5f9f57a87b9c40f",
  measurementId: "G-F80Z6J88KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);