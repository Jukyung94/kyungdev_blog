import { fetchLogDocuments } from "@/lib/data";
import List from "@/components/list";

export default async function Page() {
  const articles = await fetchLogDocuments();

  return (
    <div className="container col gap">
      <List docs={articles} />
    </div>
  );
}
