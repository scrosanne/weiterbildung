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
    formState: { errors }
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema)
  });

  async function onSubmit(data: FormSchemaType) {
    const result = await addEntry(data);
    console.log(result);
    console.log(data);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-10 border-slate-200 border rounded-xl">
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
        <BasicButton>Submit</BasicButton>
      </form>
    </div>
  );
}
