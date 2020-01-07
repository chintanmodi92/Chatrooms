import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDvFcB8QfIaGeNoB6uF0wKC2eMUDA81lVo",
    authDomain: "react-chat-app-4b09e.firebaseapp.com",
    databaseURL: "https://react-chat-app-4b09e.firebaseio.com",
    projectId: "react-chat-app-4b09e",
    storageBucket: "react-chat-app-4b09e.appspot.com",
    messagingSenderId: "888217019702",
    appId: "1:888217019702:web:bf460431bdcfa93a097f97",
    measurementId: "G-KJJS77LDXK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;