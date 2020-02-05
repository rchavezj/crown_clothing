import firebase from 'firebase/app';
import 'firebase/firestore';


const firestore = firebase.firestore();

// Query data
firestore
  .collection('users')
  .doc('RiBHbYitFvD7K7Vp1YKD')
  .collection('cartItems')
  .doc('Nar4lqjQREn7HbSbcTCB');

