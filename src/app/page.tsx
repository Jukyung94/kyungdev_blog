import Link from "next/link";

export default function Home() {
  const articles = [
    {
      no: '1',
      title: '1번',
      date: '2025-06-23',
      author: 'Jukyung',
      content: '동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이동해물과백두산이',
      path: `/diary`
    },
    {
      no: '2',
      title: '2번',
      date: '2025-06-23',
      author: 'Jukyung',
      content: '2',
      path: `/dev`
    },
    {
      no: '3',
      title: '3번',
      date: '2025-06-23',
      author: 'Jukyung',
      content: '3',
      path: `/diary`
    },
    {
      no: '4',
      title: '4번',
      date: '2025-06-23',
      author: 'Jukyung',
      content: '4',
      path: `/dev`
    },
    {
      no: '5',
      title: '5번',
      date: '2025-06-23',
      author: 'Jukyung',
      content: '5',
      path: `/dev`
    }

  ]


  return (
    <div className="page">
      <div className="container col gap">
        {articles.map(item => (
          <div key={item.no}>
            <Link href={`${item.path}/${item.no}`}>
              <div className="content col">
                <div className="col">
                  <h2>{item.title}</h2>
                  <p>{item.date}</p>
                </div>
                {<p>{item.content.length > 100 ? item.content.slice(0, 100) + '...' : item.content}</p>}
              </div>
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
}
