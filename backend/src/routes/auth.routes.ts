import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { me } from "../controllers/me.controller.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", authMiddleware, me);

export default router;
