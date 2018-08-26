import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDjmUJExCpR7SgcXQ9BPDWA255YGLD3HOM",
  authDomain: "expensifyv2.firebaseapp.com",
  databaseURL: "https://expensifyv2.firebaseio.com",
  projectId: "expensifyv2",
  storageBucket: "",
  messagingSenderId: "876373033791"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };