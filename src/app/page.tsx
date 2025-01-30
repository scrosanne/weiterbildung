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
    <div className="bg-gray-200 flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-10 bg-white border-slate-200 border rounded-xl w-1/3">
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
        <BasicButton errors={errors} isSubmitting={isSubmitting}>
          Submit
        </BasicButton>
      </form>
    </div>
  );
}
