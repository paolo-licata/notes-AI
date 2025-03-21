import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBMpDiqN4jX1BNTAktsHnmy4fL_2GzuaGA",
    authDomain: "ai-notes-6e524.firebaseapp.com",
    projectId: "ai-notes-6e524",
    storageBucket: "ai-notes-6e524.firebasestorage.app",
    messagingSenderId: "146673733548",
    appId: "1:146673733548:web:3ec67ae271fbe85df0b409"
  }
  
  // Firebase init
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export { auth, db };