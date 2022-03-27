import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDVFG-Q6zXOFl6Yw_mKC49Z8vOU3tKIYTI",
  authDomain: "disney-clone-c928e.firebaseapp.com",
  projectId: "disney-clone-c928e",
  storageBucket: "disney-clone-c928e.appspot.com",
  messagingSenderId: "1041971233525",
  appId: "1:1041971233525:web:0416b0ebb860aec1253bbc",
  measurementId: "G-CXCL400VZS"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
