import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/create", "/dev/:id*/edit", "/logs/:id*/edit"],
};

export async function middleware(request: NextRequest) {
  const user = request.cookies.get("user")?.value;
  const redirectToDoc = request.nextUrl.href.split("/edit")[0];
  //check if user is logged in
  if(!user || user !== "Jukyung") {
    if(request.nextUrl.pathname === "/create") {
      return NextResponse.redirect(new URL("/", request.url));
    } else {
      return NextResponse.redirect(new URL(redirectToDoc, request.url));
    }
  }
}