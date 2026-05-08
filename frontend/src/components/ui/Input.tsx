import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>; //todos os atributos válidos de um input HTML

export function Input(props: InputProps) {
  return <input className="px-2" {...props} />;
}
