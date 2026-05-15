"use client";

import { CreateClothingResponse } from "@/types/clothing";
import { Shirt } from "lucide-react";

type ContainerMapProps = {
  clothes: CreateClothingResponse[];
};

export function ContainerMapCloset({ clothes }: ContainerMapProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {clothes.map((item) => (
        <div key={item.id} className="group">
          {/* Container da Imagem com bordas arredondadas idênticas ao Modal */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-slate-50 border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5">
            {/* Imagem com zoom suave no hover */}
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay elegante com gradiente escuro de baixo para cima */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Botão de Ação Central (estilo Lucide Shirt ou similar) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100">
              <button className="bg-slate-950 text-white p-3.5 rounded-full hover:bg-indigo-600 active:scale-95 transition-all shadow-xl">
                <Shirt size={18} />
              </button>
            </div>

            {/* Tag de Categoria com desfoque de fundo sofisticado */}
            <div className="absolute top-4 left-4">
              <span className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-semibold uppercase tracking-wider text-slate-900 border border-white/40 shadow-sm">
                {item.type}
              </span>
            </div>

            {/* Tag do Ano/Coleção discreta no topo direito */}
            {item.createdAt && (
              <div className="absolute top-4 right-4">
                <span className="bg-slate-950/30 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[9px] font-medium tracking-wide text-white border border-white/10">
                  {item.createdAt}
                </span>
              </div>
            )}
          </div>

          {/* Informações da Peça abaixo do Card */}
          <div className="mt-4 px-1.5 space-y-1">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base font-light tracking-tight text-slate-900 group-hover:text-indigo-900 transition-colors">
                {item.name}
              </h3>
            </div>

            {/* Seção da Cor com círculo minimalista */}
            <p className="text-[11px] font-medium text-slate-400 tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500/20 border border-indigo-500/40 shrink-0" />
              {item.color}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
