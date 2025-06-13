'use client';

import { CommentType } from "@/lib/definitions";
import { useEffect, useState } from "react"

export default function Comment(props: { id: number }) {
  const [comment, setComment] = useState<CommentType>({ author: "", password: "", content: ""});
  const [prevComments, setPrevComments] = useState<CommentType[]>();

  console.log(props.id);

  useEffect(() => {
    setPrevComments([
      { author: "", password: "", content: ""},
      { author: "", password: "", content: ""},
      { author: "", password: "", content: ""}
    ])
  }, [])

  return(
      <div className="col">
        {prevComments?.map(() => (
          <></>
        ))}
        <span>댓글</span>
        <div>
          <div>
            <label htmlFor="author">name</label>
            <input type="text" name="author" onChange={(event) => {
              setComment({...comment, author: event.target.value})
            }}/>
          </div>
        </div>
        <input name="comment" id="" placeholder="댓글내용" value={comment.content} onChange={(event) => {
          setComment({...comment, content: event.target.value})
        }} />
        <button>등록</button>
      </div>
  )
}