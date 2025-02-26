import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/admin/:path*", "/seller/:path*", "/buyer/:path*"],
};

export default withAuth(
  (req) => {
    const role = req.nextauth.token?.role;

    if (req.nextUrl.pathname.startsWith("/admin") && role !== "administrator") {
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }

    if (req.nextUrl.pathname.startsWith("/seller") && role !== "seller") {
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }

    if (req.nextUrl.pathname.startsWith("/buyer") && role !== "buyer") {
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/auth/signin",
    },
  }
);
