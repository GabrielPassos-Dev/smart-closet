import { Router } from "express";
import {
  createClothing,
  deleteClothing,
  listClothing,
  updateClothing,
} from "../controllers/clothing.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, createClothing);
router.get("/", authMiddleware, listClothing);
router.delete("/delete/:id", authMiddleware, deleteClothing);
router.patch("/update/:id", authMiddleware, updateClothing);

export default router;
