// src/firebaseConfig.js
import firebase from "firebase";

// firebase init - add your own config here
var firebaseConfig = {
  apiKey: "AIzaSyDu5jAc8P-AltWINmsSQxtBdfK0Y2XCATw",
  authDomain: "photography-8aa09.firebaseapp.com",
  databaseURL: "https://photography-8aa09.firebaseio.com",
  projectId: "photography-8aa09",
  storageBucket: "photography-8aa09.appspot.com",
  messagingSenderId: "293537193825",
  appId: "1:293537193825:web:9f0c8cc17f69faeed4ef20",
  measurementId: "G-BM2Z4RT8Q7",
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);