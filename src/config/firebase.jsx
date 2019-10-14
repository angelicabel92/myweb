import * as firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKcsGUfCoAHWWJ-zLk6yuktLxDlJuSjCE",
    authDomain: "my-web-f53f4.firebaseapp.com",
    databaseURL: "https://my-web-f53f4.firebaseio.com",
    projectId: "my-web-f53f4",
    storageBucket: "my-web-f53f4.appspot.com",
    messagingSenderId: "168365826015",
    appId: "1:168365826015:web:ef00e395dcb6f0bf78ae6a",
    measurementId: "G-RCS3E4R270"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig, 'my-web');
