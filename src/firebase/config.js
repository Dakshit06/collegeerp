import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBszRTKMKtgrhGAfQvn1u_U4sTFaX0cpXQ",
  authDomain: "collegeerp-96236.firebaseapp.com",
  projectId: "collegeerp-96236",
  storageBucket: "collegeerp-96236.firebasestorage.app",
  messagingSenderId: "188014603856",
  appId: "1:188014603856:web:7487224312af7949c76b55"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
