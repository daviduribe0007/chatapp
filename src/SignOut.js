import React from "react";
import { auth } from "./auth";

export function SignOut() {
  return (
    auth.currentUser && (
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign out
      </button>
    )
  );
}
