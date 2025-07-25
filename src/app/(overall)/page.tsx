import Link from "next/link";
import { fetchDocuments, fetchPinnedDocuments, userName } from "@/lib/data";
import { Icons as Icon } from "@/components/icon";

export default async function Home() {
  const articles = await fetchDocuments();
  const user = await userName();
  const pinned = await fetchPinnedDocuments();

  return (
    <div className="container col gap">
      {user === "Jukyung" && (
        <button>
          <Link href={"/create"}>
            <Icon name="add" />
          </Link>
        </button>
      )}
      {pinned.map(item => (
        <div key={item.no}>
          <Link href={{ pathname: `${item.path}/${item.no}`, query: item}} as={`${item.path}/${item.no}`}>
            <div className="content col list">
              <div className="col">
                <div className="row">
                  <h2>{item.title}</h2>
                  {item.pinned && <Icon name="pinned"  />}
                </div>
                <p>{item.date}</p>
              </div>
              {<p>{item.content.length > 100 ? item.content.slice(0, 100) + '...' : item.content}</p>}
            </div>
          </Link>
        </div>
      ))}
      {articles.map(item => (
        <div key={item.no}>
          <Link href={{ pathname: `${item.path}/${item.no}`, query: item}} as={`${item.path}/${item.no}`}>
            <div className="content col list">
              <div className="col">
                <div className="row">
                  <h2>{item.title}</h2>
                  {item.pinned && <Icon name="pinned"  />}
                </div>
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
