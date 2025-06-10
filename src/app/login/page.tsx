'use client'
import { FormEvent, useTransition } from "react"
import Link from "next/link";
import "../login.css";
import "../index.css";
import { Icons as Icon } from "@/components/icon";

export default function Page() {
  const [isPending, startTransition] = useTransition();
  
  function login( formdata: FormEvent<HTMLFormElement> ) {
    startTransition(async () => {
      console.log(formdata)
    })
  }

  return (
    <div className="login col">
      <div className="box">
        <h1>Login</h1>
        <form onSubmit={login} className="content col form">
          <input type="text" placeholder="name" name="name" />
          <input type="password" placeholder="password" name="password" />
          <button type="submit" aria-disabled={isPending}>
            <span>Login</span>
          </button>
        </form>
        <button>
          <Link href={"/"} className="back">
            <Icon name="back"  />
          </Link>
        </button>
      </div>
      
    </div>
  )
}