import React, { useEffect, useRef, useState } from "react";
import firebase from "firebase/app";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { ChatMessage } from "./App";
import { firestore, auth } from "./auth";

export function ChatRoom() {
  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("createdAt").limitToLast(30);
  const [messages] = useCollectionData(query, { idField: "id" });
  const dummy = useRef();

  const [formValue, setFormValue] = useState("");

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  });

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL, displayName } = auth.currentUser;

    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      displayName,
      photoURL,
    });

    setFormValue("");
  };



  return (
    <main>
      <div>
        {messages &&
          messages.map((msn) => <ChatMessage key={msn.id} message={msn} />)}


      </div>
      <div>
        <form onSubmit={sendMessage}>
          <input
            value={formValue}
            onChange={(e) => {
              setFormValue(e.target.value);
            }}
            placeholder="Escribe aquí" />
          <button type="submit" disabled={!formValue}>Send</button>
        </form>
      </div>
      <span ref={dummy}></span>
    </main>
  );
}
