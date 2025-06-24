'use client';

import '@/globals.css';
import '@/form.css';
import { useActionState } from 'react';
import { createForm } from '@/lib/actions';
import { msgState } from '@/lib/definitions';
import Error from './error';

export default function Form() {
  const initialState: msgState = { code: "", message: ""}
  const [state, formAction, isPending] = useActionState(createForm, initialState);

  return (
    <div className="page">
      <div className="container col gap">
        <div className="content col">
          <form action={formAction}>
            <div className="title">
              <select name="path" id="path">
                <option value="/dev">Dev</option>
                <option value="/logs">Logs</option>
              </select>
              <input type="text" name="title" id="title" placeholder="Title" />
            </div>
            <div className="content">
              <textarea name="content" id="content" placeholder="Content..." />
            </div>
            <button type="submit" disabled={isPending}>
              <span>SUBMIT</span>
            </button>
            {state?.code === "fail" && (
              <Error message={state.message} />
            )}
          </form>
          {isPending && "등록중"}
        </div>
      </div>
    </div>
  )
}