import React from "react";
import './App.css';

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { ChatRoom } from "./ChatRoom";
import { SignIn } from "./SignIn";
import { SignOut } from "./SignOut";

export const auth = firebase.auth();
export const firestore = firebase.firestore();


function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>Sofka Chat</h1>
        <SignOut />
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
