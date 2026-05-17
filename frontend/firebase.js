import { initializeApp } from
    "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";

import { getAuth } from
    "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyD6PCU8vtkUdN5VASJ4fV_Qq2aflAMniic",
    authDomain: "cropbot-12afb.firebaseapp.com",
    projectId: "cropbot-12afb",
    storageBucket: "cropbot-12afb.firebasestorage.app",
    messagingSenderId: "169210697075",
    appId: "1:169210697075:web:7243df62f10c20dd486106",
    measurementId: "G-Q1QM1PLC2H"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);