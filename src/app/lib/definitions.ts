export type IconType = {
  name : string;
  width?: number;
  height?: number;
}

export type User = {
  username: string;
  password: string;
}

export type DocumentType = {
  title: string;
  date: string;
  lastmodified?: string;
  author: string;
  content: string;
  path: string;
  no: number;
  pinned?: boolean;
}

export type CommentType = {
  name: string;
  password?: string;
  content: string;
  id?: string;
  time?: string;
  cid?: string;
}

export type msgState = {
  code: "success" | "fail" | "",
  message: string
}