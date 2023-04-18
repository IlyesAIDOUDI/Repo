import firebase from 'firebase/app';
import 'firebase/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyDzudedU5TTYo61dZHuqTnmwqvC7LDwuK0",
    authDomain: "chaty-e41dc.firebaseapp.com",
    projectId: "chaty-e41dc",
    storageBucket: "chaty-e41dc.appspot.com",
    messagingSenderId: "55297005296",
    appId: "1:55297005296:ios:4307d8dc9928c53dfa1435"
};

firebase.initializeApp(firebaseConfig);

export default firebase;