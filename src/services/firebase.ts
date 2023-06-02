import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmOSKCgOGoG3TOoezG52a1lYealIGKjV0",
  authDomain: "auth-91024.firebaseapp.com",
  projectId: "auth-91024",
  storageBucket: "auth-91024.appspot.com",
  messagingSenderId: "733908762664",
  appId: "1:733908762664:web:adfdf82b2322314522751d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)