import { getApp, getApps, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

const env = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "",
};

const firebaseConfig = {
    apiKey: env.apiKey,
    authDomain: env.authDomain,
    projectId: env.projectId,
    storageBucket: env.storageBucket,
    messagingSenderId: env.messagingSenderId,
    appId: env.appId,
    measurementId: env.measurementId,
};

export const missingFirebaseVars = [
    !env.apiKey && "NEXT_PUBLIC_FIREBASE_API_KEY",
    !env.authDomain && "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
    !env.projectId && "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
    !env.storageBucket && "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
    !env.messagingSenderId && "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
    !env.appId && "NEXT_PUBLIC_FIREBASE_APP_ID",
].filter((value): value is string => Boolean(value));

export const isFirebaseConfigured = missingFirebaseVars.length === 0;

let db: Firestore | null = null;

if (isFirebaseConfigured) {
    const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    db = getFirestore(app);
}

export { db };
