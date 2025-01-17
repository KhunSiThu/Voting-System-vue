import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTMsIgBz3vMG27-EG-1dTG0JNKi6D9VIU",
    authDomain: "voting-system-d82a6.firebaseapp.com",
    projectId: "voting-system-d82a6",
    storageBucket: "voting-system-d82a6.firebasestorage.app",
    messagingSenderId: "46741966823",
    appId: "1:46741966823:web:577fb2466f42e30b4ff742",
    measurementId: "G-4B4ZWH4R33"
  };

  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();
  const storage = firebase.storage();
  let timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {db,timestamp,storage};