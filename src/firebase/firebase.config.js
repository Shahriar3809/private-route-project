// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIoqoFfYnaVWmc3GORiFXMNVLt45zHNkw",
  authDomain: "private-route-project-19a2d.firebaseapp.com",
  projectId: "private-route-project-19a2d",
  storageBucket: "private-route-project-19a2d.appspot.com",
  messagingSenderId: "284755708959",
  appId: "1:284755708959:web:15741839721cb03f88992a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;