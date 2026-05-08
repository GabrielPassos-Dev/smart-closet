import { Request, Response } from "express";
import { registerUserService } from "../services/register.user.service.js";
import { LoginUserBody, RegisterUserBody } from "../schema/auth.schema.js";
import { loginSchema, registerSchema } from "../schema/auth.schema.js";
import { loginUserService } from "../services/login.user.service.js";
import { AppError } from "../errors/AppError.js";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  maxAge: 7 * 24 * 60 * 60 * 1000,
};
// Request<Params, ResponseBody, RequestBody>
export async function registerUser(
  req: Request<{}, {}, RegisterUserBody>,
  res: Response,
) {
  try {
    const parsed = registerSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        error: "VALIDATION_ERROR",
        message: parsed.error.issues[0].message,
      });
    }

    const { user, token } = await registerUserService(parsed.data);

    res.cookie("token", token, cookieOptions);

    return res.status(201).json({ user: user, message: "Registro Realizado" });
  } catch (err: unknown) {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        error: err.code,
        message: err.message,
      });
    }

    console.error("REGISTER_ERROR:", err);

    return res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message: "Erro ao criar conta. Tente novamente em instantes.",
    });
  }
}

export async function loginUser(
  req: Request<{}, {}, LoginUserBody>,
  res: Response,
) {
  try {
    const parsed = loginSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        error: "VALIDATION_ERROR",
        message: parsed.error.issues[0].message,
      });
    }

    const { user, token } = await loginUserService(parsed.data);

    res.cookie("token", token, cookieOptions);

    return res.status(200).json({ user: user, message: "Login Realizado" });
  } catch (err: unknown) {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        error: err.code,
        message: err.message,
      });
    }

    console.error("LOGIN_ERROR:", err);

    return res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message: "Erro ao realizar login. Tente novamente em instantes.",
    });
  }
}

export async function logoutUser(req: Request, res: Response) {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  }); //Manda o navegador apagar cookie.

  return res.status(200).json({
    message: "Logout realizado",
  });
}
