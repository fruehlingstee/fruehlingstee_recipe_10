// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBl7XZLM5OoHhiVaWo0DpHk3Ida4dZ_IC8",
  authDomain: "cest-trop-bon.firebaseapp.com",
  projectId: "cest-trop-bon",
  storageBucket: "cest-trop-bon.firebasestorage.app",
  messagingSenderId: "689197165948",
  appId: "1:689197165948:web:0e7d9afee5f25a3c6208f9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
