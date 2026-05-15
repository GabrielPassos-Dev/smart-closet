import { Plus, X } from "lucide-react";
import type { FormEvent, ReactNode } from "react";
import { Button } from "../ui/Button";
type AuthFormProps = {
  subActionText: string;
  actionText: string;
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onClick: () => void;
};

export default function ClosetForm({
  children,
  onSubmit,
  onClick,
  actionText,
  subActionText,
}: AuthFormProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClick}
      />

      <div className="relative w-full max-w-md bg-[#F8F9FA] rounded-[2rem] p-6 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
        <Button onClick={onClick} type="button" variant="close">
          <X size={20} />
        </Button>

        <div className="mb-4">
          <span className="text-indigo-600 font-semibold tracking-wider uppercase text-[10px] block">
            {subActionText}
          </span>
          <h2 className="text-xl font-light text-slate-900">
            {actionText}{" "}
            <span className="font-serif italic text-indigo-900">Closet</span>
          </h2>
        </div>

        <form className="space-y-3.5" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}
