import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1RXPOFI6zeg43AcWs_RWW5hVS6L6qq0c",
  authDomain: "challenge-clone-9675a.firebaseapp.com",
  projectId: "challenge-clone-9675a",
  storageBucket: "challenge-clone-9675a.appspot.com",
  messagingSenderId: "83499562379",
  appId: "1:83499562379:web:19e430a0079cc8c1fcab8e",
  measurementId: "G-LZ8WXMWH87"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };