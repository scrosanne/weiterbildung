import { FormSchemaType } from '@/schema/formSchema';
import { FieldErrors } from 'react-hook-form';

type BasicButtonProps = {
  children: React.ReactNode;
  isSubmitting: boolean;
  errors: FieldErrors<FormSchemaType>;
};

export function BasicButton({
  children,
  isSubmitting,
  errors
}: BasicButtonProps) {
  const hasErrors = Object.keys(errors).length > 0;
  return (
    <button
      className="disabled:bg-slate-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
      type="submit"
      disabled={isSubmitting || hasErrors}>
      {isSubmitting ? 'Submitting...' : children}
    </button>
  );
}
