import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC5VDE2totP8KULfgnibH4pdpXBYtrW2X8",
  authDomain: "medcandetect.firebaseapp.com",
  projectId: "medcandetect",
  storageBucket: "medcandetect.appspot.com",
  messagingSenderId: "188004560431",
  appId: "1:188004560431:web:267dd3669f611ad2ec20da",
  measurementId: "G-EYX6458WZZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
