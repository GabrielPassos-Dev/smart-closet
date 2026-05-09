import { loginRequest, registerRequest } from "@/service/auth.service";
import { useState } from "react";

export function useAuth() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await loginRequest(email, password);
      return true;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        return false;
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (
    email: string,
    password: string,
    name: string,
  ) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await registerRequest(email, password, name);
      return true;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        return false;
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { handleLogin, handleRegister, isLoading, error };
}
