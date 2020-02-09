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


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  // Retrieve the user's reference id inside the database
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // Similar to collectionReference except used to retrieve data. 
  const snapShot = await userRef.get();
  // If snapChot data does not 
  // exist for the user, we want to 
  // create a piece of data 
  // using userRef.documentRef Object
  if (!snapShot.exists) {
    // destruct the userAuth properties for displayName and email
    const { displayName, email } = userAuth;
    // Log the date
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