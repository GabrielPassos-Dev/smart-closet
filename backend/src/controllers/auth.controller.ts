import { Request, Response } from "express";
import { registerUserService } from "../services/registerUserService.js";
import { LoginUserBody, RegisterUserBody } from "../schema/authSchema.js";
import { loginSchema, registerSchema } from "../schema/authSchema.js";
import { loginUserService } from "../services/loginUserService.js";
import { AppError } from "../errors/AppError.js";

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

    const result = await registerUserService(parsed.data);

    return res.status(201).json(result);
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

    const result = await loginUserService(parsed.data);

    return res.status(200).json(result);
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
