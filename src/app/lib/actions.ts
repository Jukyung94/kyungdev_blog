import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { DocumentType } from "./definitions";

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