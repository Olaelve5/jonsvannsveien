import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env_VITE_AUTH_DOMAIN,
  projectId: "jonsvannsveien-eb705",
  storageBucket: "jonsvannsveien-eb705.appspot.com",
  messagingSenderId: "1075818103789",
  appId: "1:1075818103789:web:4984ba52d9ef6c4bc7dde4",
  measurementId: "G-9BCCT7MRLR",
  databaseURL:
    "https://jonsvannsveien-eb705-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
