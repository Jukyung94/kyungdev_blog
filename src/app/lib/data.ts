import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { cookies } from "next/headers";

export const dynamic = 'force-dynamic'
const users = collection(db, "users");
const documents = collection(db, "documents");

export async function fetchUsers() {
  const data = await getDocs(users);
  data.docs.map(item => {
    console.log(item.data)
  })
}

export async function fetchDocuments() {
  const data = await getDocs(query(documents, orderBy("no", "desc")));
  const documentsArr = data.docs.map(item => {
    return item.data()
  })

  return documentsArr
}

export async function fetchDevDocuments() {
  const data = await getDocs(query(documents, where("path", "==", "/dev")));
  const documentsArr = data.docs.map(item => {
    return item.data()
  })

  return documentsArr
}

export async function fetchLogDocuments() {
  const data = await getDocs(query(documents, where("path", "==", "/logs")));
  const documentsArr = data.docs.map(item => {
    return item.data()
  })

  return documentsArr
}

export async function userName() {
  const cookie = await cookies();
  const user = cookie.get("user")?.value;
  console.log(user);

  return user;
}