import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase.config";

const users = collection(db, "users");
const documents = collection(db, "documents");

export async function fetchUsers() {
  const data = await getDocs(users);
  data.docs.map(item => {
    console.log(item.data)
  })
}

export async function fetchDocuments() {
  const data = await getDocs(documents);
  const documentsArr = data.docs.map(item => {
    return item.data()
  })

  return documentsArr
}