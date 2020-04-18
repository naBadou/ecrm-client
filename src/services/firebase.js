import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBIT0ZUBX6A54wSHzQtSqG9Kv1eg4PY4XA",
  authDomain: "ecrm-authentication.firebaseapp.com",
  databaseURL: "https://ecrm-authentication.firebaseio.com",
  projectId: "ecrm-authentication",
  storageBucket: "ecrm-authentication.appspot.com",
  messagingSenderId: "908792523780",
  appId: "1:908792523780:web:73375fb4db9935f6705951",
};

export const fireApp = firebase.initializeApp(firebaseConfig);
