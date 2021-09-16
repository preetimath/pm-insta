//import * as firebase from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAPQZOEHhu53YC8wT9iTyP00ugc6GgPgDY",
  authDomain: "pm-insta.firebaseapp.com",
  projectId: "pm-insta",
  storageBucket: "pm-insta.appspot.com",
  messagingSenderId: "432796288044",
  appId: "1:432796288044:web:4568ed524586ccf47c3d89"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };