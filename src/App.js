import React from "react";
import './App.css';

import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { ChatRoom } from "./ChatRoom.1";
import { SignIn } from "./SignIn";
import { SignOut } from "./SignOut";
import { auth } from "./auth";

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

export function ChatMessage({ message }) {
  const { text, uid, photoURL, displayName } = message;

  const messageOrderClass = uid === auth.currentUser.uid ? "send" : "received";

  return (
    <div children={"message " + messageOrderClass}>
      <img src={photoURL} alt={"avatar"} style={{width: "50px"}} />
      <small>{displayName}</small>
      <p>{text}</p>
    </div>
  );
}

export default App;
