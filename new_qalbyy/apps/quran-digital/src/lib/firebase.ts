import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRkvhe9yjfZL5io1i74nE3OPQAwphPgQQ",
  authDomain: "qalbyy-13696.firebaseapp.com",
  projectId: "qalbyy-13696",
  storageBucket: "qalbyy-13696.firebasestorage.app",
  messagingSenderId: "855658298099",
  appId: "1:855658298099:web:077ae725f534400bcfd586"
};

// Initialize Firebase
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
