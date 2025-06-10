'use client'
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Menus() {
  const [isActive, setIsActive] = useState('home');

  // useEffect(() => {
  //   const current = window.location.pathname.split('/');
  //   console.log(current)
  //   setIsActive(current[1])

  // })

  const menus = [
    {
      href: '/',
      about: 'home',
      name: 'Home'
    },
    {
      href: '/dev',
      about: 'dev',
      name: 'Dev'
    },
    {
      href: '/diary',
      about: 'diary',
      name: 'Logs'
    }
  ]

  return(
    <div className="nav">
      {menus.map((item, idx) => (
        <button key={idx} className={isActive === item.about ? 'active' : 'inactive'} onClick={() => {setIsActive(item.about)}}>
          <Link href={item.href} about={item.about}>
            {item.name}
          </Link>
        </button>
      ))}
    </div>
  )
}