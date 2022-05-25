// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKHkiOyActC6GhoNen8J7sfj-h0jiVb4I",
    authDomain: "doctors-portal-d9b30.firebaseapp.com",
    projectId: "doctors-portal-d9b30",
    storageBucket: "doctors-portal-d9b30.appspot.com",
    messagingSenderId: "886840784508",
    appId: "1:886840784508:web:554e01313eb6f31c66bbf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;