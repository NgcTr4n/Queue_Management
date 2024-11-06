// src/services/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPRRpTn7gm4bHdKDiwE_GHjOCo184d-7w",
  authDomain: "project2-queue-management.firebaseapp.com",
  projectId: "project2-queue-management",
  storageBucket: "project2-queue-management.firebasestorage.app",
  messagingSenderId: "354711273903",
  appId: "1:354711273903:web:b865c65ec30f96c9fe2f5a",
  measurementId: "G-6Q5NDXZFQC",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
