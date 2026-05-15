"use client";

import { HeaderHome } from "@/components/layouts/HeaderHome";
import { NavBarPrimary } from "@/components/navbars/NavBarPrimary";
import { useAuthContext } from "@/contexts/AuthContext";

export default function HomePage() {
  const { user, loading } = useAuthContext();

  if (loading) {
    <p className="flex justify-center items-center h-screen italic">
      Carregando seu estilo...
    </p>;
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 font-sans">
      <NavBarPrimary />

      <HeaderHome />

      <section className="container mx-auto px-8 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-3xl font-light">Categorias</h3>
            <div className="h-1 w-12 bg-indigo-600 mt-2"></div>
          </div>
          <a
            href="#"
            className="text-indigo-600 text-sm font-bold border-b-2 border-indigo-100 hover:border-indigo-600 transition-all"
          >
            Ver tudo
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Essenciais de Inverno", img: "https://unsplash.com" },
            { title: "Acessórios & Joias", img: "https://unsplash.com" },
            { title: "Looks de Trabalho", img: "https://unsplash.com" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={item.img}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={item.title}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-medium text-xl">{item.title}</p>
                <span className="text-white/80 text-xs uppercase tracking-widest group-hover:underline">
                  Explorar →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
