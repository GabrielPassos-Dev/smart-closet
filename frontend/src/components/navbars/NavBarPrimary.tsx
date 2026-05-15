import { useRouter } from "next/navigation";

export function NavBarPrimary() {
  const router = useRouter();
  const goToHome = () => {
    router.push("/home");
  };

  return (
    <nav className="flex items-center justify-between px-4 py-4 bg-slate-900 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
      <h1 className="text-xl font-bold tracking-tighter uppercase text-white">
        <button onClick={goToHome}>
          Smart<span className="text-indigo-400">Closet</span>
        </button>
      </h1>

      <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-slate-400">
        <a href="#" className="hover:text-indigo-400 transition-colors">
          Meus Looks
        </a>
        <a href="#" className="hover:text-indigo-400 transition-colors">
          Organizador
        </a>
        <a href="#" className="hover:text-indigo-400 transition-colors">
          Inspirações
        </a>
      </div>
      <button className="bg-slate-800 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-600 transition-all">
        Meu Perfil
      </button>
    </nav>
  );
}
