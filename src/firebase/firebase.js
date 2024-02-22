// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0AKtOCDqkKbS0w2u2zWrk4awv4_wNNGw",
  authDomain: "pejuang-tb-67570.firebaseapp.com",
  projectId: "pejuang-tb-67570",
  storageBucket: "pejuang-tb-67570.appspot.com",
  messagingSenderId: "723124013730",
  appId: "1:723124013730:web:bcad4016f949aa046465fb",
  measurementId: "G-4HRDME7VJ7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);