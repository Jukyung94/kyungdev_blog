'use client';

import '@/globals.css';
import '@/form.css';
import { useActionState } from 'react';
import { editForm } from '@/lib/actions';
import { DocumentType, msgState } from '@/lib/definitions';

export default function EditForm(props: { doc: DocumentType }) {
  const initialState: msgState = { code: "", message: ""};
  const [state, formAction, isPending] = useActionState(editForm, initialState);


  return (
    <div className="page">
      <div className="container col gap">
        <div className="content col">
          <form action={formAction}>
            <div className="title">
              <select name="path" id="path" defaultValue={props.doc.path}>
                <option value="/dev">Dev</option>
                <option value="/logs">Logs</option>
              </select>
              <input type="text" name="title" id="title" placeholder="Title" defaultValue={props.doc.title} />
              <input type="text" name="date" hidden defaultValue={props.doc.date} />
              <input type="number" name="id" hidden defaultValue={props.doc.no} />
            </div>
            <div className="content">
              <textarea name="content" id="content" placeholder="Content..." defaultValue={props.doc.content} />
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