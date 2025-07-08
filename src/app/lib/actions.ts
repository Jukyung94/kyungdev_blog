'use server';

import { doc, getDoc, setDoc, getDocs, collection, query, orderBy, limit, where, deleteDoc, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { DocumentType, msgState, CommentType } from "./definitions";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const documents = collection(db, "documents");
const users = collection(db, "users");
const comments = collection(db, "comments");


export async function createDocument(state: msgState, form: FormData) {
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

export async function editDocument(state: msgState, form: FormData) {
  const path = form.get("path");
  const title = form.get("title");
  const content = form.get("content");
  const author = "Jukyung";
  const date = form.get("date");
  const lastmodified = new Date().toISOString().split('T')[0];
  const no = Number(form.get("id"));
  const id = form.get("id");

  if(!path || !title || !content) {
    return {
      code: "fail",
      message: "fields are empty"
    } as msgState;
  }

  try {
    await setDoc(doc(db, "documents", `${id}`), {
      path,
      title,
      content,
      author,
      date,
      lastmodified,
      no
    });

  } catch (error) {
    console.log(error);
    return {
      code: "fail",
      message: "Fail to edit the article"
    } as msgState;
  }
  redirect('/');
};

export async function deleteDocumentById(id: string) {
  try  {
    const docRef = doc(db, "documents", id);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data())
    if(!docSnap.data()) throw new Error("delete failed");

    await deleteDoc(docRef);

    return {
      code: "success",
      message: "delete completed"
    } as msgState
  } catch (error) {
    const err = error as msgState
    return err
  }
}

export async function logIn(state: msgState, form: FormData) {
  try {
    const username = form.get("username");
    const password = form.get("password");

    if(!username || !password)  throw new Error('invalid username or password');

    const data = await getDocs(query(users, where("username", "==", username)));

    if(data.docs.length === 0) throw new Error('user not exist');

    const userArr = data.docs.map(item => item.data());

    const user = userArr[0];
    if(password !== user.password) throw new Error('invalid password');
    
    const cookie = await cookies();
    cookie.set("user", `${username}`);

  } catch (error) {
    const err = error as msgState;
    return {
      code: "fail",
      message: err.message
    } as msgState;
  }

  redirect('/');
};


export async function getCommentsById(id: string) {
  const data = await getDocs(query(comments, where("id", "==", id), orderBy("time", "asc")));
  const commentsArr = data.docs.map((item) => {
    console.log(item)
    const comment = {...item.data(), time: new Date(item.data().time.toMillis()).toLocaleString("en-GB"), cid: item.id}
    return comment as CommentType;
  });
  
  return commentsArr;
};

export async function addComment(comment: CommentType) {
  try {
    await addDoc(comments, {...comment, time: serverTimestamp()});
    return {
      code: "success",
      message: "Comment added"
    } as msgState;
  } catch(error) {
    const err = error as msgState;
    return err;
  }
};

export async function deleteCommentById(cid: string) {
  try  {
    const cookie = await cookies();
    const user = cookie.get("user")?.value;
    if(!user) throw new Error("You are not logged in");


    const docRef = doc(db, "comments", cid);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data())
    if(!docSnap.data()) throw new Error("Undefined comment");

    await deleteDoc(docRef);

    return {
      code: "success",
      message: "Delete completed"
    } as msgState
  } catch (error) {
    const err: msgState = {
      code: "fail",
      message: error instanceof Error ? error.message : String(error)
    };
    return err
  }
}

export async function logOut() {
  const cookie = await cookies();
  cookie.delete("user");
  redirect('/')
}