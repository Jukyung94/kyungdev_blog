'use server';

import { doc, getDoc, setDoc, getDocs, collection, query, orderBy, limit } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { DocumentType, msgState } from "./definitions";
import { redirect } from "next/navigation";
// import { revalidatePath } from "next/cache";

const documents = collection(db, "documents");

export async function createForm(state: msgState, form: FormData) {
  const path = form.get("path");
  const title = form.get("title");
  const content = form.get("content");
  const author = "Jukyung";
  const date = new Date().toISOString().split('T')[0];
  let id: number = 0;

  if(!path || !title || !content) {
    return {
      code: "fail",
      message: "fields are empty"
    } as msgState;
  }

  const q = query(documents, orderBy("no", "desc"), limit(1));

  try {
    const data = await getDocs(q);
    
    data.forEach(item => {
      if(item.data()) {
        const data = item.data() as DocumentType;
        id = data.no + 1;
      }
    })
  } catch(error) {
    console.error(error);
    return {
      code: "fail",
      message: error
    } as msgState;
  }
 
  if(!!id) {
    console.log(path, title, content, author, date, id)
  }

  try {
    await setDoc(doc(db, "documents", id.toString()), {
      path,
      title,
      content,
      author,
      date,
      no: id
    });

  } catch (error) {
    console.log(error);
    return {
      code: "fail",
      message: "Fail to create an article"
    } as msgState;
  }
  redirect('/');
};

export async function getDocumentById(id: string) {
  const docRef = doc(db, "documents", id);
  const docSnap = await getDoc(docRef);
  if(docSnap.exists()) {
    console.log(docSnap.data())
    const document = docSnap.data() as DocumentType
    return document;
  } else {
    const document: DocumentType = {
      title: "No Data",
      date: "",
      author: "anonymous",
      content: "No data",
      path: "/no",
      no: 0
    }
    return document;
  }
}