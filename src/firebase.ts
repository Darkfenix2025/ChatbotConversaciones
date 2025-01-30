// src/firebase-config.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Importa GoogleAuthProvider y signInWithPopup

// Verificar que las variables de entorno de Firebase estén presentes (opcional pero recomendado en producción)
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_FIREBASE_APP_ID;
const measurementId = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID;

if (!apiKey || !authDomain || !projectId || !storageBucket || !messagingSenderId || !appId) {
    console.error("Error: Faltan variables de entorno de Firebase. Verifica tu configuración en .env.local y en Vercel.");
    // En producción, podrías incluso detener la inicialización o mostrar un error más visible al usuario
    // throw new Error("Missing Firebase environment variables"); // Descomentar para detener la app si faltan vars en desarrollo
}

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Inicializa Firebase Authentication

// Inicializa el proveedor de Google
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider, signInWithPopup }; // Exporta googleProvider y signInWithPopup