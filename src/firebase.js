//ReactとFirebaseをくっつける「接着剤」のようなファイル

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2huygDq_8mMYPmbh9crPrjE6cFbhFbA4",
  authDomain: "smplblog-9b3fd.firebaseapp.com",
  projectId: "smplblog-9b3fd",
  storageBucket: "smplblog-9b3fd.appspot.com",
  messagingSenderId: "88317595960",
  appId: "1:88317595960:web:ff6d03eb2a7bf9a33f31cd",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
