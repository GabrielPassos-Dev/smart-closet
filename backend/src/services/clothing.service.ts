import { AccessoryType, Prisma } from "@prisma/client";
import {
  CreateClothingBody,
  DeleteClothingParams,
} from "../schema/clothing.schema.js";
import prisma from "../utils/prisma.js";
import { AppError } from "../errors/AppError.js";

const clothingSelect = {
  id: true,
  name: true,
  type: true,
  imageUrl: true,
  createdAt: true,
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

type CreateClothingResponse = Prisma.ClothingItemGetPayload<{
  select: typeof clothingSelect;
}>;

type ListClothingResponse = Prisma.ClothingItemGetPayload<{
  select: typeof listClothingSelect;
}>;

type CreateClothingInput = CreateClothingBody & {
  userId: string;
};

type DeleteClothingInput = DeleteClothingParams & {
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
    select: clothingSelect,
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

  const result = await prisma.clothingItem.deleteMany({
    where: { id, userId },
  });

  if (result.count === 0) {
    throw new AppError("NOT_FOUND", 404, "Roupa não encontrada");
  }
}
