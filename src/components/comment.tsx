'use client';

import { getCommentsById } from "@/lib/actions";
import { CommentType } from "@/lib/definitions";
import { useEffect, useState } from "react"

export default function Comment(props: { id: string }) {
  const [comment, setComment] = useState<CommentType>({ name: "", password: "", comment: ""});
  const [prevComments, setPrevComments] = useState<CommentType[]>([]);


  useEffect(() => {
    getPrevComments();
  }, [])

  async function getPrevComments() {
    const comments =  await getCommentsById(props.id);
    setPrevComments(comments)
  }

  return(
      <div className="content col gap">
        <span>Comments</span>
        {prevComments.length === 0 ? 
          <div className="row middle">No comments</div> 
        : 
          <div className="col">
            {prevComments?.map((item, idx) => (
              <div key={idx} className="prev_comment">
                <div className="title">{item.name}</div>
                <div>{item.comment}</div>
                <hr />
              </div>
            ))}
          </div>
        }
        <div className="comment">
          <div className="name">
            <label htmlFor="name">name</label>
            <input type="text" name="name" onChange={(event) => {
              setComment({...comment, name: event.target.value})
            }}/>
          </div>
          <textarea name="comment" id="" placeholder="Comment" value={comment.comment} onChange={(event) => {
            setComment({...comment, name: event.target.value})
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