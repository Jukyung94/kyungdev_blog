'use client';

import '@/globals.css';
import '@/index.css';
import '@/form.css';
import { useEffect, useState } from 'react';
import { getDocumentById } from '@/lib/actions';
import { usePathname } from 'next/navigation';
import { DocumentType } from '@/lib/definitions';

export default function ReadForm() {
  const [comment, setComment] = useState<string>("");
  const [item, setItem] = useState<DocumentType>();

  const path = usePathname();
  const id = path.split('/')[path.split('/').length - 1];
  
  async function getDocument() {
    const doc: DocumentType = await getDocumentById(id);
    setItem(doc)
  }

  useEffect(() => {
    getDocument();
  },  [])

  if(item) {
    return (
      <div className="page">
        <div className="container col gap">
          <div className="content col">
            <div className="col">
              <h2>{item.title}</h2>
              <div className="row">
                <span>{item.date}</span>
                <span>{item.author}</span>
              </div>
            </div>
            <hr />
            <div>
              <span>{item.content}</span>
            </div>
            <hr />
            <div className="col">
              <span>댓글</span>
              <input name="comment" id="" placeholder="댓글내용" value={comment} onChange={(event) => {
                setComment(event.target.value)
              }} />
              <button>등록</button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="page">
        <div className="container col gap">
          <div className="content col">
            <div className="col">
              <div className="row">
              </div>
            </div>
            <hr />
            <div>
            </div>
            <hr />
            <div className="col">
              <span>댓글</span>
              <input name="comment" id="" placeholder="댓글내용" value="" onChange={(event) => {
                setComment(event.target.value)
              }} />
              <button>등록</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}