// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzAbcYMKscOZwZJBlIxP9KYoJCdE5_N-M",
  authDomain: "coffee-store-9b02b.firebaseapp.com",
  projectId: "coffee-store-9b02b",
  storageBucket: "coffee-store-9b02b.firebasestorage.app",
  messagingSenderId: "842677878144",
  appId: "1:842677878144:web:f453fbc9be90df566d9565"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);
