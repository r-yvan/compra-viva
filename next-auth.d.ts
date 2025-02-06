// types/next-auth.d.ts (or next-auth.d.ts)
import NextAuth from "next-auth";

// Extending the session interface to add custom properties like `id` and `role`
declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Ensure user has an id
      name: string;
      email: string;
      role: "administrator" | "seller" | "buyer";
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    role: "administrator" | "seller" | "buyer";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: "administrator" | "seller" | "buyer";
  }
}
