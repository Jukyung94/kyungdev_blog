'use client';

import { addComment, getCommentsById, deleteCommentById } from "@/lib/actions";
import { CommentType, msgState } from "@/lib/definitions";
import { useEffect, useState, useTransition } from "react";
import { Icons as Icon } from "./icon";

export default function Comment(props: { id: string }) {
  const { id } = props;
  const [comment, setComment] = useState<CommentType>({ name: "", password: "", content: "", id});
  const [prevComments, setPrevComments] = useState<CommentType[]>([]);
  const [isPending, startTransition] = useTransition();
  

  useEffect(() => {
    getPrevComments();
  }, []);

  async function getPrevComments() {
    const comments =  await getCommentsById(id);
    setPrevComments(comments)
    console.log(comments)
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
                <div className="row">
                  <div className="title">{item.name}</div>
                  <div className="time">{item.time?.replace(",", " ")}</div>
                  <div className="row remove">
                    <button onClick={async () => {
                      if(confirm('Delete comment?')) {
                        if(item.cid) {
                          const res: msgState = await deleteCommentById(item.cid);
                          switch(res.code) {
                            case "success":
                              getPrevComments();
                              break;
                            case "fail":
                              alert(res.message);
                              break;
                          }
                        }
                        else alert('Undefined Id')
                      }
                    }}>
                      <Icon name="remove" />
                    </button>
                  </div>
                </div>
                <div>{item.content}</div>
                <hr />
              </div>
            ))}
          </div>
        }
        <div className="comment">
          <div className="name">
            <label htmlFor="name">name</label>
            <input type="text" name="name" placeholder="name" value={comment.name} disabled={isPending} onChange={(event) => {
              setComment({...comment, name: event.target.value})
            }}/>
          </div>
          <textarea name="comment" id="" placeholder="Comment" value={comment.content} disabled={isPending} onChange={(event) => {
            setComment({...comment, content: event.target.value})
          }} />
          <div className="row wing">
            <button
              disabled={isPending} 
              onClick={() => {
                startTransition(async () => {
                  const { name, content } = comment;
                  if(!name || !content) {
                    alert("Please write name and content of the comment");
                  } else {
                    setComment({
                      name: "",
                      content: "",
                      id
                    })
                    const res: msgState = await addComment(comment);
                    switch(res.code) {
                      case "success":
                        getPrevComments();
                        break;
                      case "fail":
                        alert(res.message);
                        break;
                    }
                  }
                });
              }}
            >
              <span>SUBMIT</span>
            </button>
          </div>
        </div>
      </div>
  )
}