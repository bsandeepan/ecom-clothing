import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtPugpdB1md-E6eXQiUrrUBmzSQhGzg3s",
    authDomain: "bs-crowndb.firebaseapp.com",
    databaseURL: "https://bs-crowndb.firebaseio.com",
    projectId: "bs-crowndb",
    storageBucket: "bs-crowndb.appspot.com",
    messagingSenderId: "418026351433",
    appId: "1:418026351433:web:0255ae7f86dcbf19c9c898",
    measurementId: "G-5BL1MH6F25"
};

export const createUserProfileDoc = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const userSS = await userRef.get();
    if (!userSS.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, email, createdAt, 
                ...additionalData
            });
        } catch (error) {
            console.log("Error creating user. ", error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;