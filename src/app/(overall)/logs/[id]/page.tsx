import ReadForm from "@/components/read-form";
import Comment from "@/components/comment";

export default async function Page(props: { params: Promise<{ id: string }>}) {
  const params = await props.params;
  const id = params.id;
  return (
    <div className="container col gap">
      <ReadForm id={id} />
      <Comment id={id} />
    </div>
  )
}