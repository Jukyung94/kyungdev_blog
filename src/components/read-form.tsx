import '@/globals.css';
import '@/index.css';
import '@/form.css';
import { DocumentType } from '@/lib/definitions';
import { getDocumentById } from '@/lib/data';
import { userName } from '@/lib/data';
import { Actions } from './formActions';

export default async function ReadForm(props: { id: string }) {
  const doc: DocumentType = await getDocumentById(props.id);
  const { id } = props;
  const { title, author, date, lastmodified, content } = doc;
  const user = await userName();

  return (
      <form className="content col">
        <div className="col">
          <h2>{title}</h2>
          <span hidden>{author}</span>
          <div className="row gap">
            <span>Created: {date}</span>
            <span>Last Modified: {lastmodified ?? date}</span>
          </div>
        </div>
        <hr />
        <div id='content'>
          <textarea readOnly defaultValue={content} />
        </div>
      <hr />
      {user && (
        <div className='row wing'>
          <Actions type='edit' id={id}/>
          <Actions type='delete' id={id} />
        </div>
      )}
      </form>
  )
}