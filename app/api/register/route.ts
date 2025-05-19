import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { userSchema } from "./schema";
import bcrypt from "bcrypt";

export const GET = async () => {
  const users = await prisma.users.findMany();
  return NextResponse.json(users);
};

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const validation = userSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const { username, email, password, role, profile } = validation.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        username,
        email,
        password: hashedPassword,
        role,
        profile: profile
          ? {
              create: {
                bio: profile.bio,
                img_url: profile.img_url,
              },
            }
          : undefined,
      },
      include: {
        profile: true,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
};
