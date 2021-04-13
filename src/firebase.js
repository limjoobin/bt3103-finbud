import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAGqLK6ERfQxknhJVmEinCBDMR-xuQdkq0",
    authDomain: "bt3103proj.firebaseapp.com",
    databaseURL: "https://bt3103proj-default-rtdb.firebaseio.com",
    projectId: "bt3103proj",
    storageBucket: "bt3103proj.appspot.com",
    messagingSenderId: "549441972556",
    appId: "1:549441972556:web:a42e81dd7226e71ed147e9",
    measurementId: "G-DV9GKFYVN9"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;