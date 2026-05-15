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
    type: z.nativeEnum(ClothingType, {
      message: "Selecione um tipo válido",
    }),
    gender: z.nativeEnum(Gender, {
      message: "Selecione um gênero válido",
    }),
    style: z.nativeEnum(Style, {
      message: "Selecione um estilo válido",
    }),
    warmth: z.nativeEnum(WarmthLevel, {
      message: "Selecione um nível de calor válido",
    }),
    accessoryType: z
      .nativeEnum(AccessoryType, {
        message: "Selecione um acessório válido",
      })
      .optional(),

    imageUrl: z.string().url("A URL da imagem é inválida").optional(),
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

export const deleteClothingSchema = z.object({
  id: z.string().uuid(),
});

export const updateClothingSchemaParams = z.object({
  id: z.string().uuid(),
});

export const updateClothingSchemaBody = z
  .object({
    name: z
      .string()
      .min(3, "O nome deve conter no mínimo 3 caracteres")
      .optional(),
    color: z.string().min(1, "Deve selecionar uma cor").optional(),
    type: z.nativeEnum(ClothingType).optional(),
    accessoryType: z.nativeEnum(AccessoryType).optional(),
    style: z.nativeEnum(Style).optional(),
    warmth: z.nativeEnum(WarmthLevel).optional(),
    gender: z.nativeEnum(Gender).optional(),
    imageUrl: z.string().url().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.type === "ACCESSORY" && !data.accessoryType) {
      ctx.addIssue({
        code: "custom",
        message: "AccessoryType é obrigatório quando o tipo é ACCESSORY",
      });
    }

    if (data.type !== "ACCESSORY" && data.accessoryType) {
      ctx.addIssue({
        code: "custom",
        message: "AccessoryType só pode ser usado com tipo ACCESSORY",
      });
    }
  });

export type CreateClothingBody = z.infer<typeof createClothingSchema>;

export type DeleteClothingParams = z.infer<typeof deleteClothingSchema>;

export type UpdateClothingParams = z.infer<typeof updateClothingSchemaParams>;

export type UpdateClothingBody = z.infer<typeof updateClothingSchemaBody>;
