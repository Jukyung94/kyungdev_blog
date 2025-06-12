import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase.config";

export async function getDocumentById(id: string) {
  const docRef = doc(db, "documents", id);
  const docSnap = await getDoc(docRef);
  if(docSnap.exists()) {
    console.log(docSnap.data())
    const document = docSnap.data()
    return document;
  } else {
    console.log("===============================")
  }
}