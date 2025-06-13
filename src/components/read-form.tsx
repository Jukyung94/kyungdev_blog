import '@/globals.css';
import '@/index.css';
import '@/form.css';
import { DocumentType } from '@/lib/definitions';
import Comment from './comment';

export default function ReadForm(props: DocumentType) {

  return (
    <div className="page">
      <div className="container col gap">
        <div className="content col">
          <div className="col">
            <h2>{props.title}</h2>
            <div className="row">
              <span>{props.date}</span>
              <span>{props.author}</span>
            </div>
          </div>
          <hr />
          <div>
            <span>{props.content}</span>
          </div>
          <hr />
          <div className="col">
            <Comment id={props.no} />
          </div>
        </div>
      </div>
    </div>
  )
}