declare module "../utils/firebase-config" {
  import { FirebaseApp } from "firebase/app";
  import { Firestore } from "firebase/firestore";

  const app: FirebaseApp;
  const firestore: Firestore;

  export { app, firestore };
}