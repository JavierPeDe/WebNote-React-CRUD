import firebase from "firebase/app";
 var firebaseConfig = {
    apiKey: "AIzaSyBa_q1qEk_7xq5wBoabeKiUdep-neVqXr8",
    authDomain: "crud-cb7f6.firebaseapp.com",
    projectId: "crud-cb7f6",
    storageBucket: "crud-cb7f6.appspot.com",
    messagingSenderId: "599073527836",
    appId: "1:599073527836:web:287f2ce9d9e760f6ada7d9"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();
  