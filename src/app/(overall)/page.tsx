import Link from "next/link";
import { fetchDocuments, userName } from "@/lib/data";
import { Icons as Icon } from "@/components/icon";
import List from "@/components/list";

export default async function Home() {
  const articles = await fetchDocuments();
  const user = await userName();

  return (
    <div className="container col gap">
      {user === "Jukyung" && (
        <button>
          <Link href={"/create"}>
            <Icon name="add" />
          </Link>
        </button>
      )}
      <List docs={articles.filter(item => item.pinned)} />
      <List docs={articles.filter(item => !item.pinned)} />
    </div>
  );
}
