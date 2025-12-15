import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const response = NextResponse.redirect(new URL("/", request.url));

    // clear session cookie
    //   res.cookies.set("session", "", { maxAge: 0 });

    // clear pathname cookie (penting)
    response.cookies.set("pathname", "", { maxAge: 0, path: "/" });

    return response;
}
