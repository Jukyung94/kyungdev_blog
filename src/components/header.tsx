import Link from "next/link"
import { Icons as Icon } from "./icon"
import { logOut } from "@/lib/actions";
import { userName } from "@/lib/data";

export default async function Header() {
  const user = await userName();

  return(
    <header>
      <div className="row">
        <div className="row wing">
        {user === "Jukyung" ? 
          <button onClick={logOut}>
            <Icon name="logout" />
          </button>
        :
          <Link href={"/login"} about="login">
            <Icon name="login" />
          </Link>
        }
        </div>
        <div className="col title">
          <Link href={"/"} about="home" >
            <h2>Jukyung</h2>
            <h4>Logs</h4>
          </Link>
          <div className="row sns">
            <Link href={"https://instagram.com/jukyung_s"} about="instagram">
              <Icon name="instagram" />
            </Link>
          </div>
        </div>
        
      </div>
    </header>
  )
};
