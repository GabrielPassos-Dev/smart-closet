export function HeaderHome() {
  return (
    <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="text-indigo-600 font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">
            Seu armário, digital
          </span>

          <h2 className="text-5xl md:text-7xl font-light leading-tight mb-6">
            O futuro do seu <br />
            <span className="font-serif italic text-indigo-900">
              estilo pessoal
            </span>
          </h2>

          <p className="text-slate-600 text-lg mb-8 max-w-md">
            Organize, planeje e descubra novas combinações. O seu closet digital
            na palma da mão.
          </p>

          <div className="flex flex-col gap-4">
            <button className="bg-white text-slate-800 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
              Ver meu Closet
            </button>

            <button className="group relative col-span-2 lg:col-auto overflow-hidden rounded-xl bg-slate-950 px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(79,70,229,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-80 transition-opacity group-hover:opacity-100" />

              <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.3),transparent)] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

              <div className="relative flex items-center justify-center gap-3">
                <svg
                  className="w-5 h-5 transition-transform duration-500 group-hover:rotate-180 group-hover:text-lime-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>

                <span className="tracking-wide uppercase text-sm md:text-base">
                  Gerar Look do Dia
                </span>
              </div>

              <div className="absolute inset-[1px] rounded-[11px] bg-black/10 group-hover:bg-transparent transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
