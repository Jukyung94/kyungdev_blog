import EditForm from "@/components/edit-form";
import { getDocumentById } from "@/lib/actions";
import { DocumentType } from "@/lib/definitions";

export default async function Page(props: { params: Promise<{ id: string }>}) {
  const params = await props.params;
  const id = params.id;
  const doc: DocumentType = await getDocumentById(id);
  return (
    <EditForm doc={doc}  />
  )
}