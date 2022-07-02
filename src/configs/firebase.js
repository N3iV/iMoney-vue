/* eslint-disable prettier/prettier */
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAk1KBjAsk6PVaah-4Bx11-EkzlWvh8VyM",
  authDomain: "imoney-17603.firebaseapp.com",
  projectId: "imoney-17603",
  storageBucket: "imoney-17603.appspot.com",
  messagingSenderId: "235027936097",
  appId: "1:235027936097:web:8532a7f6f9853c4e718b20",
  measurementId: "G-7TGRPGWWX7",
};
firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.timestamp;
export { projectAuth, projectFirestore, timestamp };
