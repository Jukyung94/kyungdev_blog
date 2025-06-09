import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const articles = [
    {
      no: '1',
      title: '1번',
      content: '1',
      path: `/diary`
    },
    {
      no: '2',
      title: '2번',
      content: '2',
      path: `/dev`
    },
    {
      no: '3',
      title: '3번',
      content: '3',
      path: `/diary`
    },
    {
      no: '4',
      title: '4번',
      content: '4',
      path: `/dev`
    },
    {
      no: '5',
      title: '5번',
      content: '5',
      path: `/dev`
    }

  ]


  return (
    <div className="page col">
      {articles.map(item => (
        <div key={item.no} className="border_green">
          <Link href={`${item.path}/${item.no}`}>
            <div>{item.title}</div>
            <div>{item.content}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
