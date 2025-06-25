'use client';

import { deleteDocumentById } from "@/lib/actions";
import { DocumentType } from "@/lib/definitions";
import Link from "next/link";
import { redirect } from "next/navigation";

export function Actions(props: {type: string,  id : string, doc?: DocumentType}) {
  const { type, id, doc } = props;
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
      <button onClick={() => console.log(doc)}>
        <Link href={{pathname: '/edit', query: doc}} >
          <span>EDIT</span>
        </Link>
     </button>
   )
  }
};