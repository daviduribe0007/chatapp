import React from "react";
import { auth } from "./App";

export function ChatMessage({ message }) {
  const { text, uid, photoURL, displayName } = message;

  const messageOrderClass = uid === auth.currentUser.uid ? "send" : "received";

  return (
    <div children={"message " + messageOrderClass}>
      <img src={photoURL} alt={"avatar"} style={{ width: "50px" }} />
      <small>{displayName}</small>
      <p>{text}</p>
    </div>
  );
}
