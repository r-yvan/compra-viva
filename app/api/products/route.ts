import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { schema } from "./schema";

export const GET = async (request: NextRequest) => {
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
    const result = schema.safeParse(body);
    if (!result.success)
      return NextResponse.json({
        error: result.error,
      });

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
    return NextResponse.json(newProduct, { status: 201 });
    
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: err, message: "Something went wrong!!" },
      { status: 500 }
    );
  }
};
