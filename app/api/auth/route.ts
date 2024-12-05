import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "your credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        
      },
    }),
  ],
});

export { handler as GET, handler as POST };
