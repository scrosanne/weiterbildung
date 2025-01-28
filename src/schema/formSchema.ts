import { z } from 'zod';

export const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password can't be less than 6 characters")
});

export type FormSchemaType = z.infer<typeof formSchema>;
