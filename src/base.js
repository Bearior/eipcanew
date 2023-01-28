import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/storage';

// first db
// const app = firebase.initializeApp({
//     apiKey: "AIzaSyAfHmniKFH6mQIRp20z9n5xLT5GNzZou2c",
//     authDomain: "eipca-db.firebaseapp.com",
//     projectId: "eipca-db",
//     storageBucket: "eipca-db.appspot.com",
//     messagingSenderId: "311227562520",
//     appId: "1:311227562520:web:767a0aa83521782695a16d",
//     measurementId: "G-V9FYBBC7JR"
//   });

  // 2 db
const app = firebase.initializeApp({
    apiKey: "AIzaSyCOLdComqETNmh7Gy9-ORdATTY0vaxzEJk",
    authDomain: "eipcadb-2.firebaseapp.com",
    projectId: "eipcadb-2",
    storageBucket: "eipcadb-2.appspot.com",
    messagingSenderId: "920418332400",
    appId: "1:920418332400:web:5509e0b7203338741ddc35",
    measurementId: "G-8QJE1JV5XF"
  });


export default app;