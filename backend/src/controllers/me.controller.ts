import { Request, Response } from "express";
import prisma from "../libs/prisma.js";

export async function me(req: Request, res: Response) {
  const userId = req.user!.id;

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
    },
  });

  return res.status(200).json(user);
}
