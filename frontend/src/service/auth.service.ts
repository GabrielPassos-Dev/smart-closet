import { AxiosError } from "axios";
import { api } from "./api";

type LoginResponse = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export async function loginRequest(
  email: string,
  password: string,
): Promise<LoginResponse> {
  try {
    const response = await api.post("/login", {
      email,
      password,
    });

    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.response?.data.message);
    }

    throw err;
  }
}

export async function meRequest() {
  const response = await api.get("/me");

  return response.data;
}
