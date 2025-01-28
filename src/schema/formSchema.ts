import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(3, "Name can't be less than 3 characters"),
  email: z.string().email(),
  password: z.string().min(6, "Password can't be less than 6 characters")
});

export type FormSchemaType = z.infer<typeof formSchema>;
