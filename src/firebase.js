import firebase from 'firebase'
//import firebase from 'firebase/app';
//import 'firebase/firestore';

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAMUDwKt3KWS5rkCiy28JQXfHa4WO9-66w",
    authDomain: "buyproj-2242a.firebaseapp.com",
    projectId: "buyproj-2242a",
    storageBucket: "buyproj-2242a.appspot.com",
    messagingSenderId: "537941327614",
    appId: "1:537941327614:web:66ba107a4f94276928afaf"
});

const db=firebaseApp.firestore();
const auth=firebase.auth();

export  {db,auth};