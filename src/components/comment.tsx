'use client';

import { CommentType } from "@/lib/definitions";
import { useEffect, useState } from "react"

export default function Comment(props: { id: string }) {
  const [comment, setComment] = useState<CommentType>({ author: "", password: "", content: ""});
  const [prevComments, setPrevComments] = useState<CommentType[]>();

  console.log(props.id);

  useEffect(() => {
    setPrevComments([
      { author: "test", password: "", content: "1"},
      { author: "test", password: "", content: "2"},
      { author: "test", password: "", content: "3"}
    ])
  }, [])

  return(
      <div className="col">
        {prevComments?.map((item, idx) => (
          <div key={idx}>
            <div>{item.author}</div>
            <div>{item.content}</div>
          </div>
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