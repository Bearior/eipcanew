import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/storage';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAfHmniKFH6mQIRp20z9n5xLT5GNzZou2c",
    authDomain: "eipca-db.firebaseapp.com",
    projectId: "eipca-db",
    storageBucket: "eipca-db.appspot.com",
    messagingSenderId: "311227562520",
    appId: "1:311227562520:web:767a0aa83521782695a16d",
    measurementId: "G-V9FYBBC7JR"
  });


export default app;