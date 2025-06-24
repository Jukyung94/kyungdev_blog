import { Icons as Icon } from "./icon"

export default function Error(props: { message: string }) {
  const { message } = props;
  return (
    <div className="row middle error">
      <Icon name="error" width={16} height={16} />
      <div>{message}</div>
    </div>
  )
}