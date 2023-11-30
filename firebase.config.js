// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // Import the storage module

const firebaseConfig = {
  apiKey: "AIzaSyBiSQs12BMNk7BQ1pdUGc2LMVADsAUAr9M",
  authDomain: "akoapa-shoes.firebaseapp.com",
  projectId: "akoapa-shoes",
  storageBucket: "akoapa-shoes.appspot.com",
  messagingSenderId: "87116977295",
  appId: "1:87116977295:web:e1d299e072e1468a014cfa",
  measurementId: "G-BW7W87XW2V",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const storage = getStorage(app); // Initialize the storage module

export default { db, app, auth, storage }; // Export the storage module
