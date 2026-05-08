import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { meRequest } from "@/service/auth.service";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type AuthContextData = {
  user: User | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextData | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const data = await meRequest();

        setUser(data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }
  return context;
}
