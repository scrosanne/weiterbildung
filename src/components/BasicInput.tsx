import { FormSchemaType } from '@/schema/formSchema';
import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

type BasicInputProps = {
  name: keyof FormSchemaType; //ensures that name is one of the keys defined in FormSchemaType
  type: string;
  placeholder: string;
  register: UseFormRegister<FormSchemaType>;
  errors: FieldErrors<FormSchemaType>;
};

export function BasicInput({
  name,
  type,
  placeholder,
  register,
  errors
}: BasicInputProps) {
  return (
    <div className="mb-4">
      <input
        {...register(name, {
          required: `${placeholder} is required`
        })}
        type={type}
        placeholder={placeholder}
        className="p-2 border border-gray-300 rounded-md w-full text-neutral-600"
      />
      {errors[name] && <p>{errors[name]?.message}</p>}
    </div>
  );
}
