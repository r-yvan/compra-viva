import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { userSchema } from "./schema";
import bcrypt from "bcrypt";

export const GET = async () => {
  const users = await prisma.users.findMany();
  return NextResponse.json(users);
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validationResult = userSchema.safeParse(body);
  if (validationResult.success) {
    const user = await prisma.users.findUnique({
      where: { email: body.email },
    });
    if (user)
      return NextResponse.json(
        { error: "User already exists!!" },
        { status: 400 }
      );
    else {
      const passwordhash = await bcrypt.hash(body.password, 10);
      const newUser = await prisma.users.create({
        data: {
          username: body.username,
          email: body.email,
          role: body.role,
          password: passwordhash,
        },
      });
      return NextResponse.json(newUser);
    }
  } else return NextResponse.json({ error: "Bad request!!" }, { status: 400 });
};
