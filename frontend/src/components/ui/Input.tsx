import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
  variant?: "primary" | "secondary";
}; //todos os atributos válidos de um input HTML e coloquei o id como obrigatorio

export function Input({
  label,
  id,
  variant = "primary",
  ...props
}: InputProps) {
  const variants = {
    primary: {
      label:
        "text-[11px] uppercase tracking-[0.2em] text-slate-400 font-medium ml-1 group-focus-within:text-slate-900 transition-colors",
      input:
        "w-full bg-[#FBFBFB] text-slate-700 placeholder:text-slate-300 px-6 py-3 rounded-2xl border border-slate-200 shadow- transition-all duration-300 ease-in-out focus:bg-white focus:border-slate-300 focus:ring-4 focus:ring-slate-100/50 outline-none",
      container: "flex flex-col gap-2 group",
    },
    secondary: {
      label:
        "block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1",
      input:
        "w-full px-4 py-2 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-slate-800 text-sm transition-all",
      container: "flex flex-col gap-0 group",
    },
  };

  const labelClass = variants[variant].label;
  const inputClass = variants[variant].input;
  const containerClass = variants[variant].container;

  return (
    <div className={containerClass}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>

      <input id={id} className={inputClass} {...props} />
    </div>
  );
}
