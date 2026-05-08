import prisma from "../libs/prisma.js";
import argon2 from "argon2";
import { LoginUserBody } from "../schema/auth.schema.js";
import { generateToken } from "../utils/generateToken.js";
import { AppError } from "../errors/AppError.js";

type LoginResponse = {
  user: {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
  };
  token: string;
};

export async function loginUserService(
  data: LoginUserBody,
): Promise<LoginResponse> {
  const { email, password } = data;

  const userSelect = {
    id: true,
    name: true,
    email: true,
    password: true,
    createdAt: true,
  };

  const user = await prisma.user.findUnique({
    where: { email },
    select: userSelect,
  });

  if (!user) {
    throw new AppError(
      "INVALID_CREDENTIALS",
      401,
      "E-mail ou senha incorretos. Por favor, tente novamente.",
    );
  }

  const isPasswordValid = await argon2.verify(user.password, password);

  if (!isPasswordValid) {
    throw new AppError(
      "INVALID_CREDENTIALS",
      401,
      "E-mail ou senha incorretos. Por favor, tente novamente.o",
    );
  }

  const token = generateToken(user.id);

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    },
    token,
  };
}
