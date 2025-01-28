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
      <label>{placeholder}</label>
      <input
        {...register(name, {
          required: `${placeholder} is required`
        })}
        type={type}
        placeholder={placeholder}
        className="appearance-none border rounded w-full py-2 px-3 focus:outline-none"
      />
      {errors[name] && (
        <p className="text-red-500 text-xs italic mt-1">{errors[name]?.message}</p>
      )}
    </div>
  );
}


