// src/firebaseConfig.js
import firebase from "firebase";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "photography-8aa09",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);