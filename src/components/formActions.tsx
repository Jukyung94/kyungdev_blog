'use client';

import { deleteDocumentById } from "@/lib/actions";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";

export function Actions(props: {type: string,  id : string}) {
  const { type, id } = props;
  const path = usePathname();
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
  }
};