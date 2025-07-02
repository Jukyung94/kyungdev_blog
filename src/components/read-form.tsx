import '@/globals.css';
import '@/index.css';
import '@/form.css';
import { DocumentType } from '@/lib/definitions';
import Comment from './comment';
import { getDocumentById } from '@/lib/data';
import { userName } from '@/lib/data';
import { Actions } from './formActions';

export default async function ReadForm(props: { id: string }) {
  const doc: DocumentType = await getDocumentById(props.id);
  const user = await userName();

  return (
    <div className="container col gap">
      <form className="content col">
        <div className="col">
          <h2>{doc.title}</h2>
          <span>{doc.author}</span>
          <div className="row gap">
            <span>Created: {doc.date}</span>
            <span>Last Modified: {doc.lastmodified ?? doc.date}</span>
          </div>
        </div>
        <hr />
        <div id='content'>
          <textarea readOnly defaultValue={doc.content} />
        </div>
      <hr />
      {user && (
        <div className='row wing'>
          <Actions type='edit' id={props.id}/>
          <Actions type='delete' id={props.id} />
        </div>
      )}
      </form>
      <div className="col">
        <Comment id={props.id} />
      </div>
    </div>
  )
}