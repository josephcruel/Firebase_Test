//TODO - Import the functions from the Firebase SDKs.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js"
//TODO -  Add SDKs for Firebase products

//NOTE - Your web app's firebase config 
//NOTE - (whe)
const firebaseConfig = {
    apiKey: "AIzaSyAiX9iAglSie27WaxjCzyzyCmrZEA9gjYA",
    authDomain: "web502-9b0d2.firebaseapp.com",
    projectId: "web502-9b0d2",
    storageBucket: "web502-9b0d2.appspot.com",
    messagingSenderId: "272952174031",
    appId: "1:272952174031:web:c66baf6fc41fb7bf0fdeba",
    measurementId: "G-925W61Q11N"
}

// Initialize Firebase 
const app = initializeApp(firebaseConfig)