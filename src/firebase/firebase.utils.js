import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyD8V0LNjgbjf-_hBDCXrlgUO3MUbtp2dwc",
    authDomain: "crwn-db-b7521.firebaseapp.com",
    databaseURL: "https://crwn-db-b7521.firebaseio.com",
    projectId: "crwn-db-b7521",
    storageBucket: "crwn-db-b7521.appspot.com",
    messagingSenderId: "1013692895168",
    appId: "1:1013692895168:web:6b0fb2089bce0df2254225",
    measurementId: "G-7NEXC2FMZR"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
