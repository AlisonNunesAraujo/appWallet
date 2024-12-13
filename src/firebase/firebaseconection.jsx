import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import { getAuth, getReactNativePersistence} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDMXVAu76vp3AjScgGvRkatKG_wfzQCVqQ",
  authDomain: "walletweb-f3207.firebaseapp.com",
  projectId: "walletweb-f3207",
  storageBucket: "walletweb-f3207.firebasestorage.app",
  messagingSenderId: "717716174513",
  appId: "1:717716174513:web:79c9cd3aea7fa1df4d1490"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth = getAuth(app)

export {db,auth}