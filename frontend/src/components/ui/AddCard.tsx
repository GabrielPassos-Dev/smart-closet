import { ReactNode } from "react";

type addCardProps = {
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};
export function AddCard({
  children,
  className,
  disabled,
  onClick,
}: addCardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
      <button
        onClick={onClick}
        className="border-2 border-dashed border-slate-200 rounded-[2rem] aspect-[3/4] flex flex-col items-center justify-center gap-4 text-slate-400 hover:border-indigo-300 hover:text-indigo-500 hover:bg-indigo-50/30 transition-all group"
      >
        {children}
      </button>
    </div>
  );
}
