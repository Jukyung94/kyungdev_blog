import '@/app/globals.css';
import '@/app/index.css';
import '@/app/form.css';

export default function ReadForm() {
  const item =  {
      no: '1',
      title: '1번',
      date: '2025-06-23',
      author: 'Jukyung',
      content: '동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이',
      path: `/logs`
    }

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
          <div>
            댓글
          </div>
        </div>
      </div>
    </div>
  )
}