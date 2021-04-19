import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABl7jPSMkBZ4MbIwNe9mJFhHvUSE26ocM",
  authDomain: "erbs-alt-tab-guide.firebaseapp.com",
  projectId: "erbs-alt-tab-guide",
  storageBucket: "erbs-alt-tab-guide.appspot.com",
  messagingSenderId: "1083294921192",
  appId: "1:1083294921192:web:c7c555f7e1bdd8851c745d",
  measurementId: "G-6H2H0PGFQY",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
