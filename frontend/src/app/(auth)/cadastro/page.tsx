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

export default function RegisterPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const { handleRegister, isLoading, error } = useAuth();

  const goToLogin = () => {
    router.push("/login");
  };

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  async function handleRegisterSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const success = await handleRegister(email, password, name);

    if (success) {
      router.replace("/home");
    }
  }

  return (
    <main className="bg-[#F8F9FA] min-h-screen w-full flex items-center justify-center p-4 relative">
      <CardForms>
        <AuthForm onSubmit={handleRegisterSubmit}>
          <Input
            label="nome"
            id="name"
            type="text"
            placeholder="Nome Completo"
            value={name}
            onChange={handleNameChange}
          />

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
            {isLoading ? "Criando conta..." : "Criar Conta"}
          </Button>

          <AuthFooter
            description="Já tem cadastro?"
            actionText="Acessar minha conta"
            onAction={goToLogin}
            isLogin={false}
          />
        </AuthForm>
      </CardForms>
    </main>
  );
}
