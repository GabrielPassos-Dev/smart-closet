import { AccessoryType, Prisma } from "@prisma/client";
import { CreateClothingBody } from "../schema/clothing.schema.js";
import prisma from "../utils/prisma.js";

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
