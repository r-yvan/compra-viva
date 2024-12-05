import { NextRequest } from "next/server";
import { schema } from "./schema";

export const GET = async (request: NextRequest) => {
  const body = await request.json();
  const validationResult = await schema.safeParse(body);
  if (validationResult.success) {
    
  }
};
