// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJyYreWSzXKgxwzpcOGYqzSKUEFOqAvyg",
  authDomain: "h-genius-car-services.firebaseapp.com",
  projectId: "h-genius-car-services",
  storageBucket: "h-genius-car-services.appspot.com",
  messagingSenderId: "176534465520",
  appId: "1:176534465520:web:81a238edae9f6435f38b35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)