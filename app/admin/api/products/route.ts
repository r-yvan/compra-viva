import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { schema } from "./schema";

interface RequestBody {
  name: string;
  product_type: string;
  description: string;
  price: number;
  quantity: number;
  seller_id: number;
  image_url: string;
}

export const GET = async () => {
  try {
    const result = await prisma.products.findMany();
    return NextResponse.json(result);
  } catch (err) {
    console.log(err);
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const validationResult = schema.safeParse(body);
    if (!validationResult.success)
      return NextResponse.json({
        error: validationResult.error,
      });
    const productFromDb = await prisma.products.findUnique({
      where: { name: body.name },
    });

    if (productFromDb)
      return NextResponse.json(
        {
          error: "Product already exists",
        },
        { status: 400 }
      );
    else {
      const newProduct = await prisma.products.create({
        data: {
          name: body.name,
          product_type: body.product_type,
          description: body.description,
          price: body.price,
          quantity: body.quantity,
          seller_id: body.seller_id,
          image_url: body.image_url,
        },
      });
      return NextResponse.json(newProduct, { status: 200 });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: err, message: "Something went wrong!!" },
      { status: 400 }
    );
  }
};
