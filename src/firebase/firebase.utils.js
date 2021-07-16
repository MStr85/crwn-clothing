import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDCnxpLcxkQScSZ_TjCowvVy9Jqd6anbhQ",
    authDomain: "crown-db-eebd6.firebaseapp.com",
    projectId: "crown-db-eebd6",
    storageBucket: "crown-db-eebd6.appspot.com",
    messagingSenderId: "22338736350",
    appId: "1:22338736350:web:a800eb4ce1872548b7f24f",
    measurementId: "G-G1M4WZRC22"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;