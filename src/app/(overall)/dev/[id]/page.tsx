import ReadForm from "@/components/read-form";

export default async function Page(props: { params: { id: string }}) {
  const params = await props.params;
  const id = params.id;
  return (
    <ReadForm id={id} />
  )
}