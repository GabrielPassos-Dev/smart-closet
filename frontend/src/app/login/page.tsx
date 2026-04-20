"use client";

import { loginRequest } from "@/service/auth.service";
import { useState, FormEvent } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleLogin(e: FormEvent) {
    e.preventDefault();

    try {
      const data = await loginRequest(email, password);

      localStorage.setItem("tokenAuth", data.token);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Entrar</button>
    </form>
  );
}
