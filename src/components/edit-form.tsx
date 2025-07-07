'use client';

import '@/globals.css';
import '@/form.css';
import { useActionState } from 'react';
import { editDocument } from '@/lib/actions';
import { DocumentType, msgState } from '@/lib/definitions';

export default function EditForm(props: { doc: DocumentType }) {
  const initialState: msgState = { code: "", message: ""};
  const { path, title, date, no, content } = props.doc;
  const [state, formAction, isPending] = useActionState(editDocument, initialState);


  return (
    <div className="page">
      <div className="container col gap">
        <div className="content col">
          <form action={formAction}>
            <div className="title">
              <select name="path" id="path" defaultValue={path}>
                <option value="/dev">Dev</option>
                <option value="/logs">Logs</option>
              </select>
              <input type="text" name="title" id="title" placeholder="Title" defaultValue={title} />
              <input type="text" name="date" hidden defaultValue={date} />
              <input type="number" name="id" hidden defaultValue={no} />
            </div>
            <div className="content">
              <textarea name="content" id="content" placeholder="Content..." defaultValue={content} />
            </div>
            <button type="submit" disabled={isPending}>
              <span>SUBMIT</span>
            </button>
            {state?.code === "fail" && (
              <div>{state.message}</div>
            )}
          </form>
          {isPending && "등록중"}
        </div>
      </div>
    </div>
  )
}