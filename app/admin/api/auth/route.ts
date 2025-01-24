import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import prisma from "@/prisma/client";

const handler = NextAuth({
  providers: [
    // CredentialsProvider({
    //   name: "your credentials",
    //   credentials: {
    //     email: {},
    //     password: {},
    //   },
    //   async authorize(credentials, req) {
    //     if (credentials.email) {
    //       const user = await prisma.users.findOne({ where: { email: credentials.email } });
    //       if (user) {
    //         return { id: user.id, name: user.name };
    //       }
    //     }
    //   },
    // }),
  ],
});

export { handler as GET, handler as POST };
