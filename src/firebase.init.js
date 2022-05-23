// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDWoC2KO2Mq_F8sDiYQmDeyyWFhp1VJkg",
    authDomain: "final-project-2bb92.firebaseapp.com",
    projectId: "final-project-2bb92",
    storageBucket: "final-project-2bb92.appspot.com",
    messagingSenderId: "756555095465",
    appId: "1:756555095465:web:c299a4c07f7e30f88f38b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;