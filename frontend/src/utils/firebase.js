
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "prepgenius-dfc8f.firebaseapp.com",
  projectId: "prepgenius-dfc8f",
  storageBucket: "prepgenius-dfc8f.firebasestorage.app",
  messagingSenderId: "931161834436",
  appId: "1:931161834436:web:c4b7be23fe53d6456e9a91",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

const provider=new GoogleAuthProvider();

export {auth, provider}