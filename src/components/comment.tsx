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
      <div className="col gap">
        <span>Comments</span>
        <hr />
        <div className="prev_comment">
          {prevComments?.map((item, idx) => (
            <div key={idx}>
              <div>{item.author}</div>
              <div>{item.content}</div>
            </div>
          ))}
        </div>
        <div className="comment">
          <div className="name">
            <label htmlFor="author">name</label>
            <input type="text" name="author" onChange={(event) => {
              setComment({...comment, author: event.target.value})
            }}/>
          </div>
          <textarea name="comment" id="" placeholder="Comment" value={comment.content} onChange={(event) => {
            setComment({...comment, content: event.target.value})
          }} />
          <div className="row wing">
            <button>
              <span>SUBMIT</span>
            </button>
          </div>
        </div>
      </div>
  )
}