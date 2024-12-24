import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBETtT7L0fJsLFxyctx2tfhi4nowyauVWU",
  authDomain: "monportfolio-bc1d8.firebaseapp.com",
  projectId: "monportfolio-bc1d8",
  storageBucket: "monportfolio-bc1d8.firebasestorage.app",
  messagingSenderId: "265042444866",
  appId: "1:265042444866:web:2f02694f1bf339a61ee3db",
  measurementId: "G-ZNL1TFLQM3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);