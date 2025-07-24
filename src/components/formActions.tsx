'use client';

import { deleteDocumentById, pinDocumentById } from "@/lib/actions";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { Icons as Icon } from "./icon";
import { getCookie } from "@/lib/utils";

export function Actions(props: {type: string,  id : string}) {
  const { type, id } = props;
  const path = usePathname();
  const user = getCookie('user');
  if(type === 'delete') {
    return(
       <button onClick={async () => {
          if(confirm('delete article?')) {
            const res = await deleteDocumentById(id);
            alert(res.message)
            if(res.code === "success") {
              redirect('/');
            } 
          }
        }}><span>DELETE</span>
      </button>
    )
  } else if (type === 'edit') {
    return(
      <button>
        <Link href={`${path}/edit`}>
          <span>EDIT</span>
        </Link>
     </button>
   )
  } else if (type === 'pin') {
    return(
      <button onClick={async (e) => {
        e.preventDefault();
        const res = await pinDocumentById(id);
        if(res.code === "success") {
          console.log(res.message);
          redirect(path)
        }
        // console.log(user);
        return;
      }}>
        <Icon name='pinned' />
      </button>
    )
  } else if (type === 'unpin') {
    return(
      <button onClick={async (e) => {
        e.preventDefault();
        const res = await pinDocumentById(id);
        if(res.code === "success") {
          console.log(res.message);
          redirect(path)
        }
        console.log('213')
        return;
      }}>
        <Icon name='unpinned' />
      </button>
    )
  }
};