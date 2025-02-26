import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/prisma/client";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "your credentials",
      credentials: {
        email: {
          label: "Email",
          placeholder: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          placeholder: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const user = await prisma.users.findUnique({
          where: { email: credentials!.email },
        });
        if (user && credentials?.password === user.password) {
          return { id: user.user_id.toString(), name: user.username };
        } else {
          return null;
        }
      },
    }),
    // Uncomment and configure GoogleProvider if needed
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
