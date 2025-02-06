import NextAuth from "next-auth";
import { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
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
      async authorize(credentials) {
        const user = await prisma.users.findUnique({
          where: { email: credentials!.email },
        });

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          user!.password
        );

        if (user && passwordMatch) {
          return {
            id: user.id.toString(),
            name: user.username,
            email: user.email,
            role: user.role,
          } as User;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as "administrator" | "seller" | "buyer";
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/signout",
    error: "/auth/error",
  },
});

export { handler as GET, handler as POST };
