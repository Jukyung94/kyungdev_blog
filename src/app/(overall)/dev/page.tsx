import { fetchDevDocuments } from "@/lib/data";
import List from "@/components/list";

export default async function Page() {
  const articles = await fetchDevDocuments();

  return (
    <section className="container col gap">
      <List docs={articles} />
    </section>
  );
}
