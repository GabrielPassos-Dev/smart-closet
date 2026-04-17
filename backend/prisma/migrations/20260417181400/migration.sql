-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'UNISEX');

-- CreateEnum
CREATE TYPE "ClothingType" AS ENUM ('ACCESSORY', 'JACKET', 'SHIRT', 'TOP', 'DRESS', 'PANTS', 'SHORTS', 'SKIRT', 'SOCKS', 'SHOES');

-- CreateEnum
CREATE TYPE "AccessoryType" AS ENUM ('HAT', 'GLASSES', 'WATCH', 'BELT', 'BRACELET', 'RING', 'NECKLACE', 'EARRING');

-- CreateEnum
CREATE TYPE "Style" AS ENUM ('CASUAL', 'FORMAL', 'SPORT', 'STREET', 'SOCIAL', 'FITNESS', 'BEACH');

-- CreateEnum
CREATE TYPE "WarmthLevel" AS ENUM ('LIGHT', 'MEDIUM', 'HEAVY');

-- CreateTable
CREATE TABLE "ClothingItem" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "type" "ClothingType" NOT NULL,
    "accessoryType" "AccessoryType",
    "style" "Style" NOT NULL,
    "warmth" "WarmthLevel" NOT NULL,
    "gender" "Gender" NOT NULL,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClothingItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClothingItem" ADD CONSTRAINT "ClothingItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
