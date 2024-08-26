// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_ouM0R8J6GsT-ft1f0yKu7zSZ3L_t38Y",
  authDomain: "dev-mint-coa-webpage.firebaseapp.com",
  databaseURL: "https://dev-mint-coa-webpage-default-rtdb.firebaseio.com",
  projectId: "dev-mint-coa-webpage",
  storageBucket: "dev-mint-coa-webpage.appspot.com",
  messagingSenderId: "551453836621",
  appId: "1:551453836621:web:6088422378a20ba9b06304"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default config;
