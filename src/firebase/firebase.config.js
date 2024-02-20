// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3jtppNH247AvrVZi2vmCB14aO6sIynf0",
  authDomain: "phd-papers.firebaseapp.com",
  projectId: "phd-papers",
  storageBucket: "phd-papers.appspot.com",
  messagingSenderId: "232384646140",
  appId: "1:232384646140:web:4934ab646fdd1e4748c079",
  measurementId: "G-LBZKZG1YXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;