import Link from "next/link";
import { DocumentType } from "@/lib/definitions";
import { Icons as Icon } from "@/components/icon";

export default function List(props: { docs: DocumentType[] }) {
  const { docs } = props;

  return (
    <>
      {docs.map(item => (
        <div key={item.no}>
          <Link href={{ pathname: `${item.path}/${item.no}`, query: item }} as={`${item.path}/${item.no}`}>
            <div className="content col list">
              <div className="col">
                <div className="row">
                  <h2>{item.title}</h2>
                  {item.pinned && <Icon name="pinned" />}
                </div>
                <p>{item.date}</p>
              </div>
              {<p>{item.content.length > 100 ? item.content.slice(0, 100) + '...' : item.content}</p>}
            </div>
          </Link>
        </div>
      ))}
    </>
  );

}