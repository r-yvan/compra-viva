import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { sellerSchema, buyerSchema, administratorSchema } from "./schema";
import bcrypt from "bcrypt";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  if (body.role == "seller")
    var validationResult = await sellerSchema.safeParse(body);
    if (validationResult.success) {
      const user = await prisma.users.findUnique({
        where: { email: body.email },
      });
    if (user) return NextResponse.json({ error: "User already exists!!" });
    else {
      const passwordhash = await bcrypt.hash(body.password, 10);
      const newUser = await prisma.users.create({
        data: {
          email: body.email,
          username: body.username,
          password: passwordhash,
        },
      });
      return NextResponse.json(newUser);
    }
  } else return NextResponse.json({ error: "Bad request!!" }, { status: 400 });
};
