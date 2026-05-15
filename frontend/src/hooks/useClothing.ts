import { createClothingRequest } from "@/service/clothing.service";
import { CreateClothingParams, CreateClothingResponse } from "@/types/clothing";

import { useState } from "react";

export function useClothing() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [clothes, setClothes] = useState<CreateClothingResponse[]>([]);

  const handleClothesCreate = async (data: CreateClothingParams) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await createClothingRequest(data);
      console.log(response);

      setClothes((prev) => [...prev, response]);

      return true;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }

      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { handleClothesCreate, clothes, isLoading, error, setError };
}
