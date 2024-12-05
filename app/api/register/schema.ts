import { z } from "zod";

export const schema = z.object({
  id: z.number(),
  email: z.string().min(5).email(),
  username: z.string().min(3),
  password: z.string().min(8),
});
