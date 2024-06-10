// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgw4jiJ1FVyPuy0Tfjwe8a-L4MxcC5Vpk",
  authDomain: "netflix-gpt-f52a7.firebaseapp.com",
  projectId: "netflix-gpt-f52a7",
  storageBucket: "netflix-gpt-f52a7.appspot.com",
  messagingSenderId: "145710228134",
  appId: "1:145710228134:web:28a937794f1360d491ca67",
  measurementId: "G-KCLTPT7QTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();