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

export const createPostDocument = async (title, body, imageUrl) => {
  if (!title || !body || !imageUrl) return;

  const route = title.toLowerCase().split(" ").join("-");

  try {
    return await addDoc(collection(db, "posts"), {
      id: route,
      title,
      body,
      imageUrl,
      postedAt: new Date().toDateString(),
      route,
    });
  } catch (error) {
    console.error("Error adding document:", error);
  }
};

export const getPostDocuments = async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));

  return querySnapshot.docs.map((docSnapshot) => {
    return docSnapshot.data();
  });
};
