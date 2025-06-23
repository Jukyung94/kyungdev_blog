import Link from "next/link";
import { fetchDevDocuments } from "@/lib/data";

export default async function Page() {
  const articles = await fetchDevDocuments();

  return (
    <div className="container col gap">
      {articles.map(item => (
        <div key={item.no}>
          <Link href={{ pathname: `${item.path}/${item.no}`, query: item}} as={`${item.path}/${item.no}`}>
            <div className="content col list">
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
  );
}
