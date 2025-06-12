'use client'
import { FormEvent, useTransition } from "react"
import Link from "next/link";
import "../login.css";
import "../index.css";
import { Icons as Icon } from "@/components/icon";
import { redirect } from "next/navigation";

export default function Page() {
  const [isPending, startTransition] = useTransition();
  
  async function login( event: FormEvent<HTMLFormElement> ) {

    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      await fetch("/api/users", {
        method: 'POST',
        body: formData
      }).then(res => {
        if(res) redirect('/')
        else alert('1')
      })
    })

  }

  return (
    <div className="login col">
      <div className="box">
        <h1>Login</h1>
        <form className="col form" onSubmit={login} id="login">
          <input type="text" placeholder="name" name="name" />
          <input type="password" placeholder="password" name="password" />
          <button type="submit" aria-disabled={isPending}>
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