import ReadForm from "@/components/read-form";

export default async function Page(props: any) {
  const params = await props.params;
  const id = params.id;
  return (
    <ReadForm id={id}  />
  )
}