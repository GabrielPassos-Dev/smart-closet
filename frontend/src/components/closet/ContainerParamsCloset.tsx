"use client";

import { Filter, Search } from "lucide-react";
import { Button } from "../ui/Button";
import { ChangeEvent } from "react";

type ContainerParamsProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function ContainerParamsCloset({ onChange }: ContainerParamsProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-10">
      <div className="relative flex-1">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Buscar por nome, cor ou categoria..."
          className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
          onChange={onChange}
        />
      </div>
      <Button
        variant="secondary"
        className="flex items-center justify-center gap-2 px-6 py-3 "
      >
        <Filter size={18} />
        <span>Filtros</span>
      </Button>
    </div>
  );
}
