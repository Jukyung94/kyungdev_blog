'use client'
import { FormEvent, useState, useTransition } from "react"

export default function Page() {
  // const [name, setName] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  
  function login( formdata: FormEvent<HTMLFormElement> ) {
    startTransition(async () => {
      console.log(formdata)
    })
  }

  return (
    <div className="container">
      <form onSubmit={login} className="content col">
        <input type="text" placeholder="name" name="name" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit" aria-disabled={isPending}>
          <span>Login</span>
        </button>
      </form>
    </div>
  )
}