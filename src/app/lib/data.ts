import { collection, getDocs, orderBy, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { cookies } from "next/headers";
import { DocumentType } from "./definitions";

export const dynamic = 'force-dynamic'
const documents = collection(db, "documents");
// const comments = collection(db, "comments");

export async function fetchPinnedDocuments() {
  const data = await getDocs(query(documents, where("pinned", "==", true)));
  const documentsArr = data.docs.map(item => {
    return item.data() as DocumentType;
  });

  return documentsArr;
}

export async function fetchDocuments() {
  const data = await getDocs(query(documents, orderBy("no", "desc")));
  const documentsArr = data.docs.map(item => {
    return item.data() as DocumentType;
  });

  return documentsArr;
};

export async function fetchDevDocuments() {
  const data = await getDocs(query(documents, where("path", "==", "/dev"), orderBy("no", "desc")));
  const documentsArr = data.docs.map(item => {
    return item.data();
  });

  return documentsArr;
};

export async function fetchLogDocuments() {
  const data = await getDocs(query(documents, where("path", "==", "/logs"), orderBy("no", "desc")));
  const documentsArr = data.docs.map(item => {
    return item.data();
  });

  return documentsArr;
};

export async function getDocumentById(id: string) {
  const docRef = doc(db, "documents", id);
  const docSnap = await getDoc(docRef);
  if(docSnap.exists()) {
    // console.log(docSnap.data())
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
  };
};

export async function userName() {
  const cookie = await cookies();
  const user = cookie.get("user")?.value;

  return user;
};