import type { FormEvent, ReactNode } from "react"; // Importação necessária porem para tipar apenas

type AuthFormProps = {
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export default function AuthForm({ children, onSubmit }: AuthFormProps) {
  return (
    <div
      className="bg-white p-8 md:p-12 rounded-[40px] 
     /* Sombra em duas camadas: uma para volume e outra para flutuação */
     shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08),0_20px_40px_-15px_rgba(0,0,0,0.03)] 
     /* Borda com gradiente sutil para parecer acabamento de vidro */
     border border-white/20 ring-1 ring-slate-100/50
     w-full max-w-md flex flex-col gap-8 relative z-10"
    >
      <header className="space-y-2 text-center mb-4">
        <h1 className="text-3xl font-light text-slate-800 tracking-tight">
          Smart <span className="font-semibold text-slate-900">Closet</span>
        </h1>
        <p className="text-slate-400 text-[10px] uppercase font-medium tracking-[0.15em]">
          Organize seu estilo com inteligência
        </p>
      </header>

      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        {children}
      </form>
    </div>
  );
}
