// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKl_ryHqZzrKPsDVnOF-wt9ZmTg93mtMU",
  authDomain: "talk-wave-d71ec.firebaseapp.com",
  projectId: "talk-wave-d71ec",
  storageBucket: "talk-wave-d71ec.appspot.com",
  messagingSenderId: "515215408161",
  appId: "1:515215408161:web:15429b777e37214af83760"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig