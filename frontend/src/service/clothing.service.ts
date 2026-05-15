import { AxiosError } from "axios";
import { api } from "./api";
import { CreateClothingParams, CreateClothingResponse } from "@/types/clothing";

export async function createClothingRequest(
  data: CreateClothingParams,
): Promise<CreateClothingResponse> {
  try {
    const response = await api.post<CreateClothingResponse>("/clothes", data);

    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.response?.data?.message || "Erro ao criar roupa");
    }

    throw err;
  }
}
