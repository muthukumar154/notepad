
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCmKK_j-vvcno7AIz89UWOfk89cS70OiVE",
  authDomain: "notenest-72ddf.firebaseapp.com",
  projectId: "notenest-72ddf",
  storageBucket: "notenest-72ddf.firebasestorage.app",
  messagingSenderId: "242933154541",
  appId: "1:242933154541:web:707b83c553b096cdf782e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};