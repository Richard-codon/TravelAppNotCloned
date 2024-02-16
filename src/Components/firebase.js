
import * as firebase from "firebase/compat";

import { FIREBASE_API_KEY } from '@env';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "fir-auth-74f77.firebaseapp.com",
  projectId: "fir-auth-74f77",
  storageBucket: "fir-auth-74f77.appspot.com",
  messagingSenderId: "287300620844",
  appId: "1:287300620844:web:9c03b028892ab6d8fe7789"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};