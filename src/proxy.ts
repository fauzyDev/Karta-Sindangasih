import { NextResponse, NextRequest } from "next/server";

export function proxy(req: NextRequest) {
    const pathname = req.nextUrl.pathname;

    const res = NextResponse.next();
    res.cookies.set("pathname", pathname);

    return res;
}

export const config = {
    matcher: [
        "/:path*"
    ],
};
