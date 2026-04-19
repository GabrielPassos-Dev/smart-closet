// services/authService.ts

import prisma from "../utils/prisma.js";
import argon2 from "argon2";
import { RegisterUserBody } from "../schema/auth.schema.js";
import { generateToken } from "../utils/generateToken.js";
import { AppError } from "../errors/AppError.js";

type RegisterResponse = {
  user: {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
  };
  token: string;
};

export async function registerUserService(
  data: RegisterUserBody,
): Promise<RegisterResponse> {
  const { name, email, password } = data;

  const existingUser = await prisma.user.findUnique({
    where: { email },
    select: { id: true },
  });

  if (existingUser) {
    throw new AppError(
      "EMAIL_ALREADY_EXISTS",
      409,
      "Este e-mail já está em uso. Se a conta for sua, faça login ou recupere sua senha.",
    );
  }

  const passwordHash = await argon2.hash(password, {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 3,
    parallelism: 1,
  });

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: passwordHash,
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
    },
  });

  const token = generateToken(user.id);

  return { user, token };
}
