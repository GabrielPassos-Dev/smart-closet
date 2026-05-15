"use client";

import AuthForm from "@/components/forms/AuthForm";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import CardForms from "@/components/forms/CardForm";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { AuthFooter } from "@/components/forms/AuthFooter";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const { handleLogin, isLoading, error } = useAuth();

  const goToRegister = () => {
    router.push("/cadastro");
  };

  const handleForgotPassword = () => {
    console.log("Teste");
  };

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  async function handleLoginSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const success = await handleLogin(email, password);

    if (success) {
      router.replace("/home");
    }
  }

  return (
    <main className="bg-[#F8F9FA] min-h-screen w-full flex items-center justify-center p-4 relative">
      <CardForms>
        <AuthForm onSubmit={handleLoginSubmit}>
          <Input
            label="email"
            id="email"
            type="email"
            placeholder="exemplo@email.com"
            value={email}
            onChange={handleEmailChange}
          />

          <Input
            label="senha"
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={handlePasswordChange}
          />

          {error && <ErrorMessage variant="Primary" message={error} />}

          <Button disabled={isLoading} type="submit">
            {isLoading ? "Entrando..." : "Acessar Closet"}
          </Button>

          <AuthFooter
            description="Não possui uma conta?"
            actionText="Criar conta gratuita"
            onAction={goToRegister}
            onForgotPassword={handleForgotPassword}
            forgotPasswordText="Esqueceu sua senha? Recuperar acesso"
            isLogin={true}
          />
        </AuthForm>
      </CardForms>
    </main>
  );
}
