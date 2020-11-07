import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { config } from "./config.js";

export const storeUser = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = await firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists)
    userRef.set({
      displayName: userAuth.displayName,
      email: userAuth.email,
      createdAt: new Date(),
      ...additionalData,
    });

  return userRef;
};

export const storeMessage = (messageData) => {
  const messages = firestore.collection("messages");
  const message = messages.doc();

  message.set(messageData);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
