import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeeIGCViXg2Q_WFhtwFy_RfhNs-vBDdEI",
  authDomain: "aleph-messenger.firebaseapp.com",
  projectId: "aleph-messenger",
  storageBucket: "aleph-messenger.appspot.com",
  messagingSenderId: "90961269767",
  appId: "1:90961269767:web:15bcb25fe54e43644046a2"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };