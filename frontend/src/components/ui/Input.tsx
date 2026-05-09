import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
}; //todos os atributos válidos de um input HTML e coloquei o id como obrigatorio

export function Input({ label, id, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2 group">
      <label
        htmlFor={id}
        className="text-[11px] uppercase tracking-[0.2em] text-slate-400 font-medium ml-1 group-focus-within:text-slate-900 transition-colors"
      >
        {label}
      </label>

      <input
        id={id}
        className="w-full bg-[#FBFBFB] text-slate-700 placeholder:text-slate-300 px-6 py-3 rounded-2xl 
               border border-slate-200 shadow-sm
               transition-all duration-300 ease-in-out
               focus:bg-white focus:border-slate-300 focus:ring-4 focus:ring-slate-100/50 
               outline-none"
        {...props}
      />
    </div>
  );
}
