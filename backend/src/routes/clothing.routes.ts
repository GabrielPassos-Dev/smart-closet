import { Router } from "express";
import {
  createClothing,
  listClothing,
} from "../controllers/clothing.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, createClothing);
router.get("/", authMiddleware, listClothing);

export default router;
