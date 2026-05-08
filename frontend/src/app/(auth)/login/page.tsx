"use client";

import AuthForm from "@/components/forms/AuthForm";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const controller = useAuth();
  const { handleLogin, isLoading, error } = controller;

  async function handleFormsLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const success = await handleLogin(email, password);

    if (success) {
      router.replace("/home");
    }
  }

  return (
    <main className="bg-slate-700 min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden">
      <AuthForm onSubmit={handleFormsLogin}>
        <label
          htmlFor="email"
          className="text-[10px] uppercase font-bold text-slate-500 ml-1 tracking-widest group-focus-within:text-indigo-400 transition-colors"
        >
          E-mail
        </label>
        <Input
          type="email"
          placeholder="exemplo@email.com"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />

        <label
          htmlFor="password"
          className="text-[10px] uppercase font-bold text-slate-500 ml-1 tracking-widest group-focus-within:text-indigo-400 transition-colors"
        >
          Senha
        </label>
        <Input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />

        {error && (
          <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-xl animate-shake">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org"
                className="h-5 w-5 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-red-200 text-sm font-medium">{error}</span>
            </div>
          </div>
        )}

        <Button disabled={isLoading} type="submit">
          {isLoading ? "Entrando" : "Entrar"}
        </Button>
      </AuthForm>
    </main>
  );
}
