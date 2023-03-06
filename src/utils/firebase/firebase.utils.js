import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVcvp_mXXFS4mCwwMl9MZDfC5PZYjxErI",
  authDomain: "blogging-into-tech.firebaseapp.com",
  projectId: "blogging-into-tech",
  storageBucket: "blogging-into-tech.appspot.com",
  messagingSenderId: "604579447552",
  appId: "1:604579447552:web:47e5f1d64e9e72cce969e5",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
