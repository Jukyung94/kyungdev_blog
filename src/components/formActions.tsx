'use client';

import { deleteDocumentById } from "@/lib/actions";
import { redirect } from "next/navigation";

deleteDocumentById

export function Delete(props: {id : string}) {
  const { id } = props;
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
}