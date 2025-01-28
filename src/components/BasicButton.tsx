type BasicButtonProps = {
  children: React.ReactNode;
  isSubmitting: boolean;
};

export function BasicButton({ children, isSubmitting }: BasicButtonProps) {
  return (
    <button
      className="disabled:bg-slate-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
      type="submit"
      disabled={isSubmitting}>
      {isSubmitting ? 'Submitting...' : children}
    </button>
  );
}
