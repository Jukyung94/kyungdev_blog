import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/create", "/dev/:id*/edit", "/logs/:id*/edit"],
};

export async function middleware(request: NextRequest) {
  const user = request.cookies.get("user")?.value;
  if(!user || user !== "Jukyung") {
    return NextResponse.redirect(new URL("/", request.url));
  }
}