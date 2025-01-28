'use server';

import { formSchema, FormSchemaType } from '@/schema/formSchema';

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function addEntry(data: FormSchemaType) {
  await delay(2000);
  const result = formSchema.safeParse(data);

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
