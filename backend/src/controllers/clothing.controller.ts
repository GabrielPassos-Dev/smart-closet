import { Request, Response } from "express";
import { AppError } from "../errors/AppError.js";
import {
  CreateClothingBody,
  createClothingSchema,
} from "../schema/clothing.schema.js";
import {
  createClothingService,
  listClothingService,
} from "../services/clothing.service.js";

export async function createClothing(
  req: Request<{}, {}, CreateClothingBody>,
  res: Response,
) {
  try {
    const parsed = createClothingSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        error: "VALIDATION_ERROR",
        message: parsed.error.issues[0].message,
      });
    }

    const userId = req.user!.id;
    const result = await createClothingService({ ...parsed.data, userId });

    return res.status(201).json(result);
  } catch (err: unknown) {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        error: err.code,
        message: err.message,
      });
    }

    console.error("CREATE_CLOTHES_ERROR:", err);

    return res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message: "Erro ao cadastrar roupa. Tente novamente em instantes.",
    });
  }
}

export async function listClothing(req: Request, res: Response) {
  try {
    const userId = req.user!.id;
    const result = await listClothingService(userId);

    return res.status(200).json(result);
  } catch (err) {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        error: err.code,
        message: err.message,
      });
    }

    console.error("GET_CLOTHES_ERROR:", err);

    return res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message: "Erro ao carregar roupas. Tente novamente em instantes.",
    });
  }
}
