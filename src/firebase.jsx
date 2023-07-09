import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9jEEYBm1ZzZhmBLpJ0rsNDP6lqez09bc",
  authDomain: "chatting-app-88147.firebaseapp.com",
  projectId: "chatting-app-88147",
  storageBucket: "chatting-app-88147.appspot.com",
  messagingSenderId: "493893587938",
  appId: "1:493893587938:web:cf689268c06bb25853dfbb",
  measurementId: "G-MBKKQN0DWH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
console.log(db)
