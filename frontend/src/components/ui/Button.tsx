import { Plus } from "lucide-react";
import { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  onClick?: () => void; //sempre tipar parametro e retorno
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary" | "close";
  className?: string;
};

export function Button({
  children,
  onClick,
  disabled = false,
  type = "button",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const variants = {
    primary:
      "bg-slate-900 hover:bg-black text-white rounded-full py-3 transition-all duration-300 shadow-lg shadow-slate-200",
    secondary:
      "flex-1 py-2 border border-slate-200 text-slate-500 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors",
    close:
      "absolute right-5 top-5 text-slate-400 hover:text-slate-600 transition-colors",
  };

  if (variant === "tertiary") {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        type={type}
        className={`${className} flex-[1.5] group relative overflow-hidden rounded-xl bg-slate-950 font-bold text-white text-sm h-9 transition-all hover:scale-[1.01] active:scale-95 shadow-md`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90 group-hover:opacity-100 transition-opacity" />
        <div className="relative flex items-center justify-center gap-1.5 h-full">
          {children}
        </div>
      </button>
    );
  }
  return (
    <button
      className={`${className} ${variants[variant]} `}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
