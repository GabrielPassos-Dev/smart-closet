import { AlertCircle } from "lucide-react";

type ErrorMessageProps = {
  message: string;
  variant: "Primary" | "Secondary";
};

export function ErrorMessage({ message, variant }: ErrorMessageProps) {
  if (variant === "Primary") {
    return (
      <div className="bg-red-50 border border-red-100 p-3 rounded-xl animate-shake">
        <div className="flex items-center gap-3 text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-xs font-medium">{message}</span>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-rose-50/60 backdrop-blur-sm border border-rose-100/80 p-3 rounded-2xl shadow-sm animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="flex items-start gap-2.5">
        <AlertCircle className="text-rose-500 shrink-0 mt-0.5" size={15} />
        <div className="space-y-0.5">
          <span className="text-[10px] font-semibold tracking-wider uppercase text-rose-600 block">
            Erro ao salvar
          </span>
          <p className="text-xs font-medium text-rose-900/80 leading-relaxed">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}
