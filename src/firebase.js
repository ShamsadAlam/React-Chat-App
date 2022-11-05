import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4Ie2CeHahdJzmoguj29ACVsLBfJhfjEY",
  authDomain: "noble-chat-40cbe.firebaseapp.com",
  projectId: "noble-chat-40cbe",
  storageBucket: "noble-chat-40cbe.appspot.com",
  messagingSenderId: "560586807498",
  appId: "1:560586807498:web:6fd9337ae3c12779befc33",
  measurementId: "G-YCC8CZXF77",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
// const analytics = getAnalytics(app);
