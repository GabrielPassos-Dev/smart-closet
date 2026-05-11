type AuthFooterProps = {
  description: string;
  actionText: string;
  onAction: () => void;
  forgotPasswordText?: string;
  onForgotPassword?: () => void;
  isLogin?: boolean;
};

export function AuthFooter({
  description,
  actionText,
  onAction,
  forgotPasswordText,
  isLogin,
  onForgotPassword,
}: AuthFooterProps) {
  return (
    <div className="mt-4 space-y-4 text-center">
      <div className="text-sm">
        <span className="text-slate-400">{description}</span>
        <button
          onClick={onAction}
          type="button"
          className="ml-1 font-semibold text-indigo-400 hover:text-indigo-300 transition-all duration-200 ease-in-out focus:outline-none focus:underline"
        >
          {actionText}
        </button>
      </div>

      {isLogin && (
        <>
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-slate-700"></div>
            <span className="flex-shrink mx-4 text-slate-500 text-xs uppercase tracking-widest">
              ou
            </span>
            <div className="flex-grow border-t border-slate-700"></div>
          </div>

          <button
            onClick={onForgotPassword}
            type="button"
            className="text-xs text-slate-500 hover:text-slate-300 transition-colors duration-200 underline underline-offset-4 decoration-slate-700 hover:decoration-indigo-500"
          >
            {forgotPasswordText}
          </button>
        </>
      )}
    </div>
  );
}
