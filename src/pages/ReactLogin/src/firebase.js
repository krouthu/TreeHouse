import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'babel-polyfill';
import './app';

const firebaseConfig = {
    apiKey: "AIzaSyDeb2MysL96GSUoG5yrqmEDMQ_XZVzbkC0",
    authDomain: "test-e030c.firebaseapp.com",
    databaseURL: "https://test-e030c.firebaseio.com",
    projectId: "test-e030c",
    storageBucket: "test-e030c.appspot.com",
    messagingSenderId: "397726225136",
    appId: "1:397726225136:web:da3cc8b31d79c216a96835",
    measurementId: "G-DPFWEN4MVJ"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};