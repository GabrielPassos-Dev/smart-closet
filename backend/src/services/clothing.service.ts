import { Prisma } from "@prisma/client";
import {
  CreateClothingBody,
  DeleteClothingParams,
  UpdateClothingBody,
  UpdateClothingParams,
} from "../schema/clothing.schema.js";
import prisma from "../libs/prisma.js";
import { AppError } from "../errors/AppError.js";

const CreateClothingSelect = {
  id: true,
  name: true,
  type: true,
  imageUrl: true,
  createdAt: true,
  color: true,
};

const listClothingSelect = {
  id: true,
  name: true,
  type: true,
  imageUrl: true,
  createdAt: true,
  color: true,
  gender: true,
  style: true,
  warmth: true,
  accessoryType: true,
};

const updateClothingSelect = {
  name: true,
  type: true,
  imageUrl: true,
  color: true,
  gender: true,
  style: true,
  warmth: true,
  accessoryType: true,
};

type CreateClothingResponse = Prisma.ClothingItemGetPayload<{
  select: typeof CreateClothingSelect;
}>;

type ListClothingResponse = Prisma.ClothingItemGetPayload<{
  select: typeof listClothingSelect;
}>;

type UpdateClothingResponse = Prisma.ClothingItemGetPayload<{
  select: typeof updateClothingSelect;
}>;

type CreateClothingInput = CreateClothingBody & {
  userId: string;
};

type DeleteClothingInput = DeleteClothingParams & {
  userId: string;
};

type UpdateClothingInput = UpdateClothingParams &
  UpdateClothingBody & {
    userId: string;
  };

export async function createClothingService(
  data: CreateClothingInput,
): Promise<CreateClothingResponse> {
  const {
    userId,
    name,
    color,
    gender,
    type,
    style,
    warmth,
    accessoryType,
    imageUrl,
  } = data;

  const clothing = await prisma.clothingItem.create({
    data: {
      userId,
      name,
      color,
      gender,
      type,
      style,
      warmth,
      accessoryType,
      imageUrl,
    },
    select: CreateClothingSelect,
  });

  return clothing;
}

export async function listClothingService(
  userId: string,
): Promise<ListClothingResponse[]> {
  const clothing = await prisma.clothingItem.findMany({
    where: { userId },
    select: listClothingSelect,
    orderBy: { createdAt: "desc" },
  });

  return clothing;
}

export async function deleteClothingService(
  data: DeleteClothingInput,
): Promise<void> {
  const { id, userId } = data;

  const item = await prisma.clothingItem.findFirst({
    where: { id, userId },
  });

  if (!item) throw new AppError("NOT_FOUND", 404, "Roupa não encontrada");

  await prisma.clothingItem.delete({
    where: { id: item.id },
  });
}

export async function updateClothingService(
  data: UpdateClothingInput,
): Promise<UpdateClothingResponse> {
  const {
    id,
    name,
    color,
    gender,
    style,
    type,
    accessoryType,
    imageUrl,
    warmth,
    userId,
  } = data;

  const dataUpdate = Object.fromEntries(
    Object.entries({
      name,
      color,
      gender,
      style,
      type,
      accessoryType,
      imageUrl,
      warmth,
    }).filter(([_, value]) => value !== undefined),
  );

  if (Object.keys(dataUpdate).length === 0) {
    throw new AppError("BAD_REQUEST", 400, "Nada para atualizar");
  }

  const item = await prisma.clothingItem.findFirst({
    where: { id, userId },
  });

  if (!item) throw new AppError("NOT_FOUND", 404, "Roupa não encontrada");

  const result = await prisma.clothingItem.update({
    where: { id: item.id },
    data: dataUpdate,
    select: updateClothingSelect,
  });

  return result;
}
