// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiX9iAglSie27WaxjCzyzyCmrZEA9gjYA",
  authDomain: "web502-9b0d2.firebaseapp.com",
  projectId: "web502-9b0d2",
  storageBucket: "web502-9b0d2.appspot.com",
  messagingSenderId: "272952174031",
  appId: "1:272952174031:web:c66baf6fc41fb7bf0fdeba",
  measurementId: "G-925W61Q11N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);