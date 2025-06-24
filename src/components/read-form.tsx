import '@/globals.css';
import '@/index.css';
import { DocumentType } from '@/lib/definitions';
import Comment from './comment';
import { deleteDocumentById, getDocumentById } from '@/lib/actions';
import { userName } from '@/lib/data';
import { Delete } from './formActions';

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
              <button>
                <span>EDIT</span>
              </button>
              <Delete id={props.id} />
              {/* <button onClick={async () => {
                "user client"
                if(confirm('delete article?')) {
                  await deleteDocumentById(props.id);
                }
              }}>
                <span>DELETE</span>
              </button> */}
            </div>
          )}
          <div className="col">
            <Comment id={props.id} />
          </div>
        </div>
    </div>
  )
}