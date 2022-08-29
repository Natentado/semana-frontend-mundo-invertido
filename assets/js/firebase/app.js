// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7jYG6wtVMc6rBrywqh8LSK8fzpgh4HaA",
  authDomain: "projeto-teste-ecfff.firebaseapp.com",
  projectId: "projeto-teste-ecfff",
  storageBucket: "projeto-teste-ecfff.appspot.com",
  messagingSenderId: "564679141899",
  appId: "1:564679141899:web:d513d2e8a3d26931c2350e",
  measurementId: "G-BC7Y6PJLWM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
