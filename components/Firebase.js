import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDnIVa_7zFHOxd6VTLpWXvPBY6rklyV5IE",
    authDomain: "tesla-clone-6bba5.firebaseapp.com",
    projectId: "tesla-clone-6bba5",
    storageBucket: "tesla-clone-6bba5.appspot.com",
    messagingSenderId: "240495308883",
    appId: "1:240495308883:web:6712d17c85934441b396a6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth } 