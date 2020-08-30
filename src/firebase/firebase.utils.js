import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBg3S78Wxa-E5ANqKnzUCF_qiJrVzYDdjM",
  authDomain: "chat-app-699b2.firebaseapp.com",
  databaseURL: "https://chat-app-699b2.firebaseio.com",
  projectId: "chat-app-699b2",
  storageBucket: "chat-app-699b2.appspot.com",
  messagingSenderId: "9891747269",
  appId: "1:9891747269:web:ea3824e43c77c4ab2d27ac",
  measurementId: "G-4G8455K4VT",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
