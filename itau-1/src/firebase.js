import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBb3o-wiw47yAkW-6U23vaqxipgoZAbXkw",
    authDomain: "itau-1.firebaseapp.com",
    projectId: "itau-1",
    storageBucket: "itau-1.appspot.com",
    messagingSenderId: "380607154522",
    appId: "1:380607154522:web:dd8277256e24d31718cb63"
  };
  
  export const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app);