import { z } from "zod";

export const userSchema = z.object({
  username: z.string().min(3),
  email: z.string().min(5).email(),
  role: z.enum([ "seller", "buyer", "administrator"]),
  password: z.string().min(8),
});

