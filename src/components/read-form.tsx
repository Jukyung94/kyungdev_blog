import '@/globals.css';
import '@/index.css';
import { DocumentType } from '@/lib/definitions';
import Comment from './comment';
import { getDocumentById } from '@/lib/actions';
import { userName } from '@/lib/data';
import { Actions } from './formActions';

export default async function ReadForm(props: { id: string }) {
  const doc: DocumentType = await getDocumentById(props.id);
  const user = await userName();

  return (
      <div className="container col gap">
        <div className="content col">
          <div className="col">
            <h2>{doc.title}</h2>
            <div className="row">
              <span>{doc.date}</span>
              <span>{doc.author}</span>
            </div>
          </div>
          <hr />
          <div id='content'>
            <span>{doc.content}</span>
          </div>
          <hr />
          {user && (
            <div className='row wing'>
              <Actions type='edit' id={props.id}/>
              <Actions type='delete' id={props.id} />
            </div>
          )}
          <div className="col">
            <Comment id={props.id} />
          </div>
        </div>
    </div>
  )
}