// types/next-auth.d.ts or next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: "admin" | "seller" | "buyer";
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    role: "admin" | "seller" | "buyer";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: "admin" | "seller" | "buyer";
  }
}
