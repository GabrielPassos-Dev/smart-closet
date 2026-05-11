import type { ReactNode } from "react"; // Importação necessária porem para tipar apenas

type AuthFormProps = {
  children: ReactNode;
};

export default function CardForms({ children }: AuthFormProps) {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex max-w-4xl w-full min-h-[600px]">
      <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        {children}
      </div>

      <div className="hidden lg:flex lg:w-1/2 bg-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/80 to-purple-700/80 z-10" />
        <img
          src="https://unsplash.com"
          alt="Login visual"
          className="object-cover w-full h-full"
        />

        <div className="relative z-20 self-end p-12 text-white">
          <blockquote className="text-2xl font-light italic">
            A melhor maneira de organizar seu estilo pessoal.
          </blockquote>
          <p className="mt-4 text-indigo-100 font-medium">
            — Closet Digital Pro
          </p>
        </div>
      </div>
    </div>
  );
}
