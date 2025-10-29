// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2LK2DomN_aRjf0cpV8I7UsFU1OIx3LpQ",
  authDomain: "chatterly--wilby.firebaseapp.com",
  projectId: "chatterly--wilby",
  storageBucket: "chatterly--wilby.firebasestorage.app",
  messagingSenderId: "516197444055",
  appId: "1:516197444055:web:2d2244228667adc89c4392",
  measurementId: "G-FZZEN18SQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
