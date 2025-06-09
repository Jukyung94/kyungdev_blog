'use client'
import Link from "next/link"

export default function Menus() {
  return(
    <div className="nav">
      <Link href={'/dev'} about="dev">
        Dev
      </Link>
      <Link href={'/diary'} about="diary">
        Diary
      </Link>
    </div>
  )
}