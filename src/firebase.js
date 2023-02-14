import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcFa_bK-jTa1jXZj5EjlVBhTn2HbBW978",
    authDomain: "transsolution-eb0db.firebaseapp.com",
    projectId: "transsolution-eb0db",
    storageBucket: "transsolution-eb0db.appspot.com",
    messagingSenderId: "743254001321",
    appId: "1:743254001321:web:1cd21efcbda207e8444bb8",
    measurementId: "G-HK8JVNN4EV"
  };

  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};