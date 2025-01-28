export function BasicButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-slate-300 p-2 rounded text-slate-700" type="submit">
      {children}
    </button>
  );
}
