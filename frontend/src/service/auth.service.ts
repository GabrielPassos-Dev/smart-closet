import { AxiosError } from "axios";
import { api } from "./api";

type AuthResponse = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export async function loginRequest(
  email: string,
  password: string,
): Promise<AuthResponse> {
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

export async function registerRequest(
  email: string,
  password: string,
  name: string,
): Promise<AuthResponse> {
  try {
    const response = await api.post("/register", {
      name,
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
