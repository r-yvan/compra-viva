import { z } from "zod";

export const userSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(3),
  role: z.enum(["seller", "buyer", "admin"]),
  profile: z
    .object({
      bio: z.string().optional(),
      img_url: z.string().optional(),
    })
    .optional(),
});
