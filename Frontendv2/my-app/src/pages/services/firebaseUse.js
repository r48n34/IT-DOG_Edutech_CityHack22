import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBXneu8BIG3djCRc8ZCdJF0KN-TRJ8qclQ",
    authDomain: "cityhackitdog.firebaseapp.com",
    projectId: "cityhackitdog",
    storageBucket: "cityhackitdog.appspot.com",
    messagingSenderId: "346569510252",
    appId: "1:346569510252:web:548cdba055844acf533749",
    measurementId: "G-WY520QKSLE"
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const auth = firebase.auth();

async function signInWithGoogle(){
    auth.signInWithPopup(provider).catch(function (error){ console.error(error); });
}

const signOutAcc = () => auth.signOut().catch(function (error){console.error(error);});

async function checkLogin(){
    return new Promise( async (rec,rej) => {
        firebase.auth().onAuthStateChanged( (user) => {
            rec(user ? user : false)       
        })
    })
}

export { auth, signInWithGoogle, signOutAcc, checkLogin }