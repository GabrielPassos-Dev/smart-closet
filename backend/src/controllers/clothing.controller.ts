import { Request, Response } from "express";
import { AppError } from "../errors/AppError.js";
import {
  CreateClothingBody,
  createClothingSchema,
  DeleteClothingParams,
  deleteClothingSchema,
  UpdateClothingBody,
  UpdateClothingParams,
  updateClothingSchemaBody,
  updateClothingSchemaParams,
} from "../schema/clothing.schema.js";
import {
  createClothingService,
  deleteClothingService,
  listClothingService,
  updateClothingService,
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

export async function deleteClothing(
  req: Request<DeleteClothingParams, {}, {}>,
  res: Response,
) {
  try {
    const parsed = deleteClothingSchema.safeParse(req.params);

    if (!parsed.success) {
      return res.status(400).json({
        error: "VALIDATION_ERROR",
        message: parsed.error.issues[0].message,
      });
    }

    const userId = req.user!.id;

    await deleteClothingService({ ...parsed.data, userId });

    return res.sendStatus(204);
  } catch (err: unknown) {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        error: err.code,
        message: err.message,
      });
    }

    console.error("DELETE_CLOTHES_ERROR:", err);

    return res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message: "Erro ao excluir roupa. Tente novamente em instantes.",
    });
  }
}

export async function updateClothing(
  req: Request<UpdateClothingParams, {}, UpdateClothingBody>,
  res: Response,
) {
  try {
    const parsedParams = updateClothingSchemaParams.safeParse(req.params);

    const parsedBody = updateClothingSchemaBody.safeParse(req.body);

    if (!parsedParams.success) {
      return res.status(400).json({
        error: "VALIDATION_ERROR",
        message: parsedParams.error.issues[0].message,
      });
    }
    if (!parsedBody.success) {
      return res.status(400).json({
        error: "VALIDATION_ERROR",
        message: parsedBody.error.issues[0].message,
      });
    }

    const userId = req.user!.id;

    const result = await updateClothingService({
      ...parsedParams.data,
      ...parsedBody.data,
      userId,
    });

    return res.status(200).json(result);
  } catch (err: unknown) {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        error: err.code,
        message: err.message,
      });
    }

    console.error("UPDATE_CLOTHES_ERROR:", err);

    return res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      message: "Erro ao editar roupa. Tente novamente em instantes.",
    });
  }
}
