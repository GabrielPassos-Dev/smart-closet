"use client";

import { useState } from "react";
import { NavBarPrimary } from "@/components/navbars/NavBarPrimary";
import { useAuthContext } from "@/contexts/AuthContext";
import { CreateClothingModal } from "@/components/modals/CreateClothingModal";
import { HeaderCloset } from "@/components/closet/HeaderCloset";
import { ContainerParamsCloset } from "@/components/closet/ContainerParamsCloset";
import { ContainerMapCloset } from "@/components/closet/ContainerMapCloset";
import { CreateClothingResponse } from "@/types/clothing";
import { AddCard } from "@/components/ui/AddCard";
import { Plus } from "lucide-react";

export default function ClosetPage() {
  const { user, loading } = useAuthContext();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clothes: CreateClothingResponse[] = [
    {
      id: "1",
      name: "Blazer Linho",
      color: "Bege",
      type: "ACCESSORY",
      imageUrl: "https://images.unsplash.com/photo-xxxxx",
      createdAt: "2025",
    },
  ];

  if (loading)
    return (
      <p className="flex justify-center items-center h-screen italic">
        Carregando seu estilo...
      </p>
    );

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 font-sans">
      <NavBarPrimary />

      <main className="container mx-auto px-4 pt-12 pb-12">
        <HeaderCloset
          clothesLength={clothes.length}
          onClick={() => setIsModalOpen(true)}
        />

        <ContainerParamsCloset
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <ContainerMapCloset clothes={clothes} />

        <AddCard onClick={() => setIsModalOpen(true)}>
          <div className="p-4 rounded-full bg-slate-100 group-hover:bg-indigo-100 transition-colors">
            <Plus size={32} />
          </div>
          <span className="font-medium">Novo Item</span>
        </AddCard>
      </main>

      <CreateClothingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
