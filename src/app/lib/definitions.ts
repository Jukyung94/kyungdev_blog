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
  author: string;
  content: string;
  path: string;
  no: number;
}

export type CommentType = {
  author: string;
  password?: string;
  content: string;
}

export type msgState = {
  code: "success" | "fail" | "",
  message: string
}