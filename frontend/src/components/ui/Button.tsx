import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void; //sempre tipar parametro e retorno
  disabled: boolean;
  type: "button" | "submit" | "reset";
};

export function Button({
  children,
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  return (
    <button
      className="bg-slate-900 hover:bg-black text-white rounded-full py-3 transition-all duration-300 shadow-lg shadow-slate-200"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
