import * as firebase from 'firebase';
require('@firebase/firestore');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8PbjbVeKA7UVMtA5QWCU7KHvJETbAkSI",
  authDomain: "newsletter-5a032.firebaseapp.com",
  databaseURL: "https://newsletter-5a032-default-rtdb.firebaseio.com",
  projectId: "newsletter-5a032",
  storageBucket: "newsletter-5a032.appspot.com",
  messagingSenderId: "145511564813",
  appId: "1:145511564813:web:2e6838f15e1d88eb773744"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
