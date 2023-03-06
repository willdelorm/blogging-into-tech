import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

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

const db = getFirestore();

export const createPostDocument = async (title, body) => {
  try {
    return await addDoc(collection(db, "posts"), {
      title,
      body,
      postedAt: new Date(),
    });
  } catch (error) {
    console.log("Error adding document:", error);
  }
};

export const getPostDocuments = async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));

  const postMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, body, postedAt } = docSnapshot.data();
    acc = [...acc, { title, body, postedAt }];
    return acc;
  }, []);

  return postMap;
};
