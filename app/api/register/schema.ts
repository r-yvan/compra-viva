import { z } from "zod";

export const sellerSchema = z.object({
  seller_id: z.number().optional(),
  role: z.enum([ "seller", "buyer", "administrator"]),
  email: z.string().min(5).email(),
  username: z.string().min(3),
  password: z.string().min(8),
});

export const buyerSchema = z.object({
  buyer_id: z.number().optional(),
  role: z.enum([ "seller", "buyer", "administrator"]),
  email: z.string().min(5).email(),
  username: z.string().min(3),
  password: z.string().min(8),
});

export const administratorSchema = z.object({
  admin_id: z.number().optional(),
  role: z.enum([ "seller", "buyer", "administrator"]),
  email: z.string().min(5).email(),
  username: z.string().min(3),
  password: z.string().min(8),
});
