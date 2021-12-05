import * as firebase from "firebase/app";
 import "firebase/firestore";
 import { getFirestore } from "@firebase/firestore";

 const firebaseConfig = {
  apiKey: "AIzaSyCrKORyrR2r1-OVyH5yz4P-4so68KdqrNo",
  authDomain: "test-app-d6266.firebaseapp.com",
  projectId: "test-app-d6266",
  storageBucket: "test-app-d6266.appspot.com",
  messagingSenderId: "1043724136146",
  appId: "1:1043724136146:web:668ef14fb437e027ac070b",
  measurementId: "G-7R7WRPYGDN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = getFirestore(firebaseApp);

 export { db };