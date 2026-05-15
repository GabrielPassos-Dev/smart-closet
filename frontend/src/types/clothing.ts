export type Gender = "MALE" | "FEMALE" | "UNISEX";

export const genderOptions = [
  {
    value: "MALE",
    label: "Masculino",
  },
  {
    value: "FEMALE",
    label: "Feminino",
  },
  {
    value: "UNISEX",
    label: "Unissex",
  },
];

export type ClothingType =
  | "ACCESSORY"
  | "JACKET"
  | "SHIRT"
  | "TOP"
  | "DRESS"
  | "PANTS"
  | "SHORTS"
  | "SKIRT"
  | "SOCKS"
  | "SHOES";

export const clothingOptions = [
  {
    value: "ACCESSORY",
    label: "Acessório",
  },
  {
    value: "JACKET",
    label: "Jaqueta",
  },
  {
    value: "SHIRT",
    label: "Camisa",
  },
  {
    value: "TOP",
    label: "Top",
  },
  {
    value: "DRESS",
    label: "Vestido",
  },
  {
    value: "PANTS",
    label: "Calça",
  },
  {
    value: "SHORTS",
    label: "Shorts",
  },
  {
    value: "SKIRT",
    label: "Saia",
  },
  {
    value: "SOCKS",
    label: "Meias",
  },
  {
    value: "SHOES",
    label: "Calçados",
  },
];

export type AccessoryType =
  | "HAT"
  | "GLASSES"
  | "WATCH"
  | "BELT"
  | "BRACELET"
  | "RING"
  | "NECKLACE"
  | "EARRING";

export const accessoryOptions = [
  {
    value: "HAT",
    label: "Chapéu / Boné",
  },
  {
    value: "GLASSES",
    label: "Óculos",
  },
  {
    value: "WATCH",
    label: "Relógio",
  },
  {
    value: "BELT",
    label: "Cinto",
  },
  {
    value: "BRACELET",
    label: "Pulseira",
  },
  {
    value: "RING",
    label: "Anel",
  },
  {
    value: "NECKLACE",
    label: "Colar",
  },
  {
    value: "EARRING",
    label: "Brinco",
  },
];

export type Style =
  | "CASUAL"
  | "FORMAL"
  | "SPORT"
  | "STREET"
  | "SOCIAL"
  | "FITNESS"
  | "BEACH";

export const styleOptions = [
  {
    value: "CASUAL",
    label: "Casual",
  },
  {
    value: "FORMAL",
    label: "Formal",
  },
  {
    value: "SPORT",
    label: "Esportivo",
  },
  {
    value: "STREET",
    label: "Streetwear",
  },
  {
    value: "SOCIAL",
    label: "Social",
  },
  {
    value: "FITNESS",
    label: "Fitness",
  },
  {
    value: "BEACH",
    label: "Praia",
  },
];

export type WarmthLevel = "LIGHT" | "MEDIUM" | "HEAVY";

export const warmthOptions = [
  {
    value: "LIGHT",
    label: "Leve",
  },
  {
    value: "MEDIUM",
    label: "Médio",
  },
  {
    value: "HEAVY",
    label: "Pesado",
  },
];

export type CreateClothingParams = {
  name: string;
  color: string;
  gender: Gender;
  type: ClothingType;
  style: Style;
  warmth: WarmthLevel;
  accessoryType?: AccessoryType;
  imageUrl?: string;
};

export type CreateClothingResponse = {
  id: string;
  name: string;
  imageUrl?: string;
  type: ClothingType;
  createdAt: string;
  color: string;
};
