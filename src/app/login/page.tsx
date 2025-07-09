'use client';

import { useActionState } from "react"
import Link from "next/link";
import "../login.css";
import "../index.css";
import { Icons as Icon } from "@/components/icon";
import { logIn } from "@/lib/actions";
import { msgState } from "@/lib/definitions";
import Error from "@/components/error";

export default function Page() {
  const initialState: msgState = { code: "", message: ""}
  const [state, formAction, isPending] = useActionState(logIn, initialState);
  if (!('serviceWorker' in navigator)) {
    console.warn("Service Worker is not supported in this browser.");
  } else {
    console.log("Service Worker is supported.");
  }
  const test = window.location;
  console.log(test)
  if (!('PushManager' in window)) {
    console.warn("PushManager is not supported in this browser.");
  } else {
    console.log("PushManager is supported.");
  }
  return (
    <div className="login col">
      <div className="box">
        <h1>Login</h1>
        <form className="col form" action={formAction} id="login" >
          <input type="text" placeholder="username" name="username" required />
          <input type="password" placeholder="password" name="password" required />
          {state?.code === "fail" && (
            <Error message={state.message} />
          )}
          <button type="submit" disabled={isPending}>
            <span>Login</span>
          </button>
        </form>
        <button disabled={isPending}>
          <Link href={"/"} className="back">
            <Icon name="back"  />
          </Link>
        </button>
      </div>
      
    </div>
  )
}