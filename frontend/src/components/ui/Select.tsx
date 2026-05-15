import type { SelectHTMLAttributes } from "react";

import { ChevronDown } from "lucide-react";

type Option = {
  value: string;
  label: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  id: string;
  options: Option[];
  variant?: "primary" | "secondary";
};

export function Select({
  label,
  id,
  options,
  variant = "primary",
  ...props
}: SelectProps) {
  const variants = {
    primary: {
      label:
        "text-[11px] uppercase tracking-[0.2em] text-slate-400 font-medium ml-1 group-focus-within:text-slate-900 transition-colors",

      select:
        "w-full bg-[#FBFBFB] text-slate-700 px-6 py-3 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 ease-in-out focus:bg-white focus:border-slate-300 focus:ring-4 focus:ring-slate-100/50 outline-none appearance-none cursor-pointer",

      container: "flex flex-col gap-2 group",
    },

    secondary: {
      label:
        "block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1",

      select:
        "w-full px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 text-slate-800 text-sm transition-all appearance-none cursor-pointer",

      container: "flex flex-col gap-0 group",
    },
  };

  const labelClass = variants[variant].label;

  const selectClass = variants[variant].select;

  const containerClass = variants[variant].container;

  return (
    <div className={containerClass}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>

      <div className="relative">
        <select id={id} className={selectClass} {...props}>
          <option disabled value="" className="text-slate-400">
            Selecione
          </option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-white text-slate-800"
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-slate-400
            pointer-events-none
          "
        />
      </div>
    </div>
  );
}
