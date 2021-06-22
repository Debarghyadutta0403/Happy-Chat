import firebase from "firebase/app";

import "firebase/auth";


export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyC_aawfwCVsVbt1XvQQGNEmUBnffcw8-50",
  authDomain: "superchat-b0220.firebaseapp.com",
  projectId: "superchat-b0220",
  storageBucket: "superchat-b0220.appspot.com",
  messagingSenderId: "591284446602",
  appId: "1:591284446602:web:4f164209315c29f84dd473",
  measurementId: "G-4PD0ZR2478"
  }).auth();

  export default firebase;