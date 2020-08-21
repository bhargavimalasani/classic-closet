import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC0EE2VuG8nG3km55c4ULvIY0sVObpQmdY",
    authDomain: "closet-db.firebaseapp.com",
    databaseURL: "https://closet-db.firebaseio.com",
    projectId: "closet-db",
    storageBucket: "closet-db.appspot.com",
    messagingSenderId: "1029846690059",
    appId: "1:1029846690059:web:694418e4e5d72a310f9a0e",
    measurementId: "G-1ZEDNFHPLX"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore(); 

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
