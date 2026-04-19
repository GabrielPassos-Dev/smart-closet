import { z } from "zod";
import {
  AccessoryType,
  ClothingType,
  Gender,
  Style,
  WarmthLevel,
} from "@prisma/client";

export const createClothingSchema = z
  .object({
    name: z.string().min(3, "O nome deve conter no mínimo 3 caracteres"),
    color: z.string().min(1, "Deve selecionar uma cor"),
    type: z.nativeEnum(ClothingType),
    accessoryType: z.nativeEnum(AccessoryType).optional(),
    style: z.nativeEnum(Style),
    warmth: z.nativeEnum(WarmthLevel),
    gender: z.nativeEnum(Gender),
    imageUrl: z.string().url().optional(),
  })
  .refine(
    (data) => {
      if (data.type === "ACCESSORY" && !data.accessoryType) return false;
      if (data.type !== "ACCESSORY" && data.accessoryType) return false;
      return true;
    },
    {
      message: "Acessório inválido para o tipo informado",
    },
  );

export type CreateClothingBody = z.infer<typeof createClothingSchema>;
