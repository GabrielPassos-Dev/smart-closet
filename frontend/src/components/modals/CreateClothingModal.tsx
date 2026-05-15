"use client";

import { useClothing } from "@/hooks/useClothing";
import {
  accessoryOptions,
  AccessoryType,
  clothingOptions,
  ClothingType,
  Gender,
  genderOptions,
  Style,
  styleOptions,
  WarmthLevel,
  warmthOptions,
} from "@/types/clothing";
import { Upload, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { ErrorMessage } from "../ui/ErrorMessage";
import ClosetForm from "../forms/ClosetForm";
import { Button } from "../ui/Button";

type CreateClothingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const initialState = {
  name: "",
  color: "",
  imageUrl: undefined,
  type: "" as ClothingType | "",
  accessoryType: undefined,
  style: "" as Style | "",
  warmth: "" as WarmthLevel | "",
  gender: "" as Gender | "",
};

type FormData = {
  name: string;
  color: string;
  imageUrl: string | undefined;
  type: ClothingType | "";
  accessoryType: AccessoryType | undefined;
  style: Style | "";
  warmth: WarmthLevel | "";
  gender: Gender | "";
};

export function CreateClothingModal({
  isOpen,
  onClose,
}: CreateClothingModalProps) {
  const [formData, setFormData] = useState<FormData>(initialState);
  const { handleClothesCreate, error, setError } = useClothing();

  useEffect(() => {
    if (!isOpen) {
      setFormData(initialState);
      setError(null);
    }
  }, [isOpen]);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value === "" ? undefined : value,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const success = await handleClothesCreate({
      name: formData.name,
      color: formData.color,
      type: formData.type as ClothingType,
      gender: formData.gender as Gender,
      style: formData.style as Style,
      warmth: formData.warmth as WarmthLevel,

      ...(formData.accessoryType && {
        accessoryType: formData.accessoryType,
      }),

      ...(formData.imageUrl && {
        imageUrl: formData.imageUrl,
      }),
    });

    if (success) {
      setFormData(initialState);
      onClose();
    }
  }

  if (!isOpen) return null;

  return (
    <ClosetForm
      onSubmit={handleSubmit}
      onClick={onClose}
      actionText="Adicionar ao"
      subActionText="Nova peça"
    >
      <Input
        label="Nome"
        id="name"
        type="text"
        placeholder="Ex: Blazer Linho"
        value={formData.name}
        onChange={handleChange}
        variant="secondary"
      />

      <div className="grid grid-cols-2 gap-3">
        <Input
          label="Cor"
          id="color"
          type="text"
          placeholder="Ex: Bege"
          value={formData.color}
          onChange={handleChange}
          variant="secondary"
        />
        <Select
          label="Tipo / Categoria"
          id="type"
          value={formData.type}
          onChange={handleChange}
          variant="secondary"
          options={clothingOptions}
        />
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        <Select
          label="Gênero"
          id="gender"
          value={formData.gender}
          onChange={handleChange}
          variant="secondary"
          options={genderOptions}
        />
        <Select
          label="Estilo"
          id="style"
          value={formData.style}
          onChange={handleChange}
          variant="secondary"
          options={styleOptions}
        />
        <Select
          label="Calor"
          id="warmth"
          value={formData.warmth}
          onChange={handleChange}
          variant="secondary"
          options={warmthOptions}
        />
      </div>

      {formData.type === "ACCESSORY" && (
        <Select
          label="Tipo de acessorio"
          id="accessoryType"
          value={formData.accessoryType}
          onChange={handleChange}
          variant="secondary"
          options={accessoryOptions}
        />
      )}

      <div className="relative">
        <Input
          label="Link da Imagem"
          id="imageUrl"
          type="url"
          placeholder="https://..."
          value={formData.imageUrl}
          onChange={handleChange}
          variant="secondary"
          style={{ paddingLeft: "2.5rem" }}
        />
        <Upload
          className="absolute left-3.5 top-[68%] -translate-y-1/2 text-slate-400 pointer-events-none"
          size={14}
        />
      </div>

      <div className="flex gap-2.5 pt-2">
        <Button variant="secondary" onClick={onClose} type="button">
          Cancelar
        </Button>

        <Button variant="tertiary" type="submit">
          <span>Salvar</span>
        </Button>
      </div>
      {error && <ErrorMessage variant="Secondary" message={error} />}
    </ClosetForm>
  );
}
