// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"
require('dotenv').config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  REACT_APP_API_KEY_FIREBASE, REACT_APP_AUTH_DOMAIN_FIREBASE, REACT_APP_PROJECT_ID_FIREBASE, REACT_APP_STORAGE_BUCKET_FIREBASE, REACT_APP_MESSAGING_SENDER_ID_FIREBASE, REACT_APP_APP_ID_FIREBASE, REACT_APP_MEASUREMENT_ID_FIREBASE
} = process.env;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: REACT_APP_API_KEY_FIREBASE,
  authDomain: REACT_APP_AUTH_DOMAIN_FIREBASE,
  projectId: REACT_APP_PROJECT_ID_FIREBASE,
  storageBucket: REACT_APP_STORAGE_BUCKET_FIREBASE,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID_FIREBASE,
  appId: REACT_APP_APP_ID_FIREBASE,
  measurementId: REACT_APP_MEASUREMENT_ID_FIREBASE
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app)