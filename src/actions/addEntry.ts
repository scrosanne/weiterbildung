'use server';

import { formSchema, FormSchemaType } from "@/schema/formSchema";

export async function addEntry(data: FormSchemaType) {
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
