import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';


const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyD_iJu_qHk_QYEWbrudwovPbsAW5kdCnyQ",
  authDomain: "kuis2-kynanti.firebaseapp.com",
  datatbaseURL: "https://kuis2-kynanti-default-rtdb.firebaseio.com/",
  projectId: "kuis2-kynanti",
  storageBucket: "kuis2-kynanti.appspot.com",
  messagingSenderId: "988340693666",
  appId: "1:988340693666:web:1af5251e0830a1d6f585fb",
  measurementId: "G-4TTKWRCYXL"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);
const app = initializeApp(config);
export const auth = getAuth();
export const db = getDatabase(app);

export default firebase;