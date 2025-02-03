'use server';

import { formSchema, FormSchemaType } from '@/schema/formSchema';
import { prisma } from '../../lib/prisma';

export async function addEntry(data: FormSchemaType) {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const result = formSchema.safeParse(data);

  console.log(result);

  if (result.success) {
    const user = await prisma.user.create({
      data: {
        name: result.data.name,
        email: result.data.email,
        password: result.data.password
      }
    });

    const users = await prisma.user.findMany();
    console.log('new users', users);

    return {
      success: true,
      data: result.data
    };
  }
  if (result.error) {
    return {
      success: false,
      error: result.error.format()
    };
  }
}
