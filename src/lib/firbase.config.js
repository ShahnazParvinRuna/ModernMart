import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCKBfqeqL4ED_WCJvpV7WhxLJUQ8GkK3NI",
  authDomain: "modernmart-8b7fa.firebaseapp.com",
  projectId: "modernmart-8b7fa",
  storageBucket: "modernmart-8b7fa.firebasestorage.app",
  messagingSenderId: "753533520160",
  appId: "1:753533520160:web:a836add2417cce01bb2f45"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
