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
    <button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
