"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";

type HeaderClosetProps = {
  clothesLength: number;
  onClick: () => void;
};

export function HeaderCloset({ clothesLength, onClick }: HeaderClosetProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 border-b border-slate-100 pb-6">
      <div className="space-y-2">
        <span className="text-indigo-600 font-semibold tracking-wider uppercase text-[13px] block">
          Seu Guarda-Roupa Digital
        </span>
        <h1 className="text-5xl font-light tracking-tight text-slate-900 sm:text-4xl">
          Meu{" "}
          <span className="font-serif italic text-indigo-950 font-normal">
            Closet
          </span>
        </h1>
        <p className="text-xs font-medium text-slate-400/90 tracking-wide uppercase">
          {clothesLength === 0
            ? "Nenhuma peça cadastrada"
            : clothesLength === 1
              ? "1 peça disponível"
              : `${clothesLength} peças exclusivas`}
        </p>
      </div>

      <Button onClick={onClick} variant="tertiary" className="py-3  ">
        <Plus className="size-4 text-indigo-400" />
        <span className="font-medium tracking-wide">Adicionar Peça</span>
      </Button>
    </div>
  );
}
