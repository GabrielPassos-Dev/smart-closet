import { Router } from "express";
import { createClothing } from "../controllers/clothing.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, createClothing);

export default router;
