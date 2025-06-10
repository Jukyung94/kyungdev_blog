import Link from "next/link"
import { Icons as Icon } from "./icon"

export default function Header() {
  return(
    <header>
      <div className="row">
        <div className="row wing">
          <Link href={"/login"} about="login">
            <Icon name="profile" width={36} height={36} />
          </Link>
        </div>
        <div className="col title">
          <Link href={"/"} about="home" >
            <h2>Jukyung</h2>
            <h4>Logs</h4>
          </Link>
          <div className="row sns">
            <Icon name="instagram" />
          </div>
        </div>
        
      </div>
    </header>
  )
};
