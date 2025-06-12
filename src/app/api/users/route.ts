import { db } from "../../../../firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { NextRequest } from "next/server";

const users = collection(db, "users");

async function getUsers() {
  const data = await getDocs(users);
  data.docs.map(item => {
    console.log(item.id)
  })
}



export async function GET(request: Request) {
  await getUsers()
  return new Response("", {
    status: 200,
    statusText: "123"
  })
}

export async function POST(request: NextRequest) {
  if(request.method === 'POST') {
    const req = await request.formData();
    console.log(req.get("name"))
    console.log(req.get("password"))
  }
  
  return new Response("", {
    status: 200
  })
}