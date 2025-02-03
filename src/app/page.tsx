'use client';

import { addEntry } from '@/actions/addEntry';
import { BasicButton } from '@/components/BasicButton';
import { BasicInput } from '@/components/BasicInput';
import { formSchema, FormSchemaType } from '@/schema/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function FormWithReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema)
  });

  async function onSubmit(data: FormSchemaType) {
    const result = await addEntry(data);
    console.log(result);
    reset();
  }

  return (
    <div className="bg-gray-200 flex-col flex justify-center items-center h-screen">
      <div className="flex flex-col w-1/3">
        <h1 className="text-xl font-bold italic mb-2">Register</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-10 bg-white border-slate-200 border rounded-xl">
          <BasicInput
            name="name"
            type="text"
            placeholder="Name"
            register={register}
            errors={errors}
          />
          <BasicInput
            name="email"
            type="email"
            placeholder="Email"
            register={register}
            errors={errors}
          />
          <BasicInput
            name="password"
            type="password"
            placeholder="Password"
            register={register}
            errors={errors}
          />
          <BasicInput
            name="confirmPassword"
            type="confirmPassword"
            placeholder="Confirm Password"
            register={register}
            errors={errors}
          />
          <BasicButton errors={errors} isSubmitting={isSubmitting}>
            Submit
          </BasicButton>
        </form>
      </div>
    </div>
  );
}
