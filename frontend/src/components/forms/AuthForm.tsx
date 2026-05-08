import type { FormEvent, ReactNode } from "react"; // Importação necessária porem para tipar apenas

type AuthFormProps = {
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export default function AuthForm({ children, onSubmit }: AuthFormProps) {
  return (
    <div className="bg-slate-900/60 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-md border border-slate-800/50 flex flex-col gap-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-black text-white tracking-tight">
          Bem-vindo <span className="text-indigo-500">de volta</span>
        </h1>
        <p className="text-slate-500 text-xs uppercase font-bold tracking-[0.2em]">
          Acesse sua conta financeira
        </p>
      </header>

      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        {children}
      </form>
    </div>
  );
}
