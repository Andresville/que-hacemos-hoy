import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDN0TFt11vBSEJ5VeSkUhnpUqgrBdImvEs",
  authDomain: "av-v12-ee1a8.firebaseapp.com",
  projectId: "av-v12",
  storageBucket: "av-v12.appspot.com",
  messagingSenderId: "771762797630",
  appId: "1:771762797630:web:235508eb7af8d75cb2a56f"
};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//exportamos la base de datos a toda la app
export const db = getFirestore(app);

