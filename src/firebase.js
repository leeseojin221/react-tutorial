// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcAdRgHWhV7YN2iwq0SV6tA82wNcuhJlg",
    authDomain: "react-tutorial-ca41a.firebaseapp.com",
    projectId: "react-tutorial-ca41a",
    storageBucket: "react-tutorial-ca41a.appspot.com",
    messagingSenderId: "112020417476",
    appId: "1:112020417476:web:2fc59d71fe40dc81ae1291",
    measurementId: "G-LFX0F1EGD7"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)


// Initialize Cloud Firestore and get a reference to the service
export const auth = getAuth(firebaseApp)

export default firebaseApp;