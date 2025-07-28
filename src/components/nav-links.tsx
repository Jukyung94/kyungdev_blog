'use client'

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Menus() {
  const [isActive, setIsActive] = useState('/');
  const path = usePathname();

  const currentPath = path === '/' ? '/' : path.split('/')[1];
  if(currentPath !== isActive) {
    setIsActive(currentPath);
  }

  
  const menus = [
    {
      href: '/',
      about: '/',
      name: 'Home'
    },
    {
      href: '/dev',
      about: 'dev',
      name: 'Dev'
    },
    {
      href: '/logs',
      about: 'logs',
      name: 'Logs'
    },
    {
      href: '/editor',
      about: 'editor',
      name: 'Editor'
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