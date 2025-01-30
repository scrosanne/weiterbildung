'use server';

import { formSchema, FormSchemaType } from '@/schema/formSchema';

export async function addEntry(data: FormSchemaType) {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const result = formSchema.safeParse(data);

  console.log(result);

  if (result.success) {
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
