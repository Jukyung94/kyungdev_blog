import '@/globals.css';
import '@/index.css';
import '@/form.css';
import { DocumentType } from '@/lib/definitions';
import Comment from './comment';
import { getDocumentById } from '@/lib/actions';

export default async function ReadForm(props: { id: string }) {
  const doc: DocumentType = await getDocumentById(props.id)

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
          <div>
            <span>{doc.content}</span>
          </div>
          <hr />
            <div className='row'>
              <div className='wing'>
                <button>
                  <span>EDIT</span>
                </button>
                <button>
                  <span>DELETE</span>
                </button>
              </div>
            </div>
          <div className="col">
            <Comment id={props.id} />
          </div>
        </div>
    </div>
  )
}