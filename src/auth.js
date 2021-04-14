import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyCDl1qTqS0bQ1YdQOJVcvL20-sYrizKNH0",
  authDomain: "softkachat-davidu.firebaseapp.com",
  projectId: "softkachat-davidu",
  storageBucket: "softkachat-davidu.appspot.com",
  messagingSenderId: "48163705532",
  appId: "1:48163705532:web:8ef5307ad32c9b003f36b9"
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
