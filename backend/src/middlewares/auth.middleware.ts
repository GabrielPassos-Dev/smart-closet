import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors/AppError.js";

type TokenPayload = {
  sub: string;
  iat?: number;
  exp?: number;
};

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const token = req.cookies.token;

  if (!token) {
    throw new AppError("INVALID_TOKEN", 401, "Token não informado");
  }

  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error("JWT_SECRET não definido");
  }

  try {
    const decoded = jwt.verify(token, jwtSecret) as TokenPayload;

    req.user = {
      id: decoded.sub,
    };

    next();
  } catch (err) {
    throw new AppError("INVALID_TOKEN", 401, "Token inválido ou expirado");
  }
}
