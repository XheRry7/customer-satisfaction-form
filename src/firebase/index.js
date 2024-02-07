import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBr8N6C21UAAdQ1UQ2Lcv8afzOry4YD0wM",
  authDomain: "custom-satisfaction-form.firebaseapp.com",
  projectId: "custom-satisfaction-form",
  storageBucket: "custom-satisfaction-form.appspot.com",
  messagingSenderId: "15122548989",
  appId: "1:15122548989:web:2d8d1edf0fae0321c69694",
  measurementId: "G-YHV8Z108W6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
