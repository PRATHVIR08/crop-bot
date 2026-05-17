import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "XXXXXXXX",
  appId: "XXXXXXXX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.handleSignup = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

window.handleLogin = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
  window.location.href = "app.html";
};