import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCkjA-b6_4miXNrrTsp69z5B3oDmKbALQA",
  authDomain: "crwn-db-bc7b4.firebaseapp.com",
  databaseURL: "https://crwn-db-bc7b4.firebaseio.com",
  projectId: "crwn-db-bc7b4",
  storageBucket: "crwn-db-bc7b4.appspot.com",
  messagingSenderId: "229670806736",
  appId: "1:229670806736:web:9a66ced53b86398c37aad5",
  measurementId: "G-Z2Q8TQFVSJ"
};


// 
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...additionalData
      })
    }catch (error){
      console.log('error creating user: ', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authintication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;