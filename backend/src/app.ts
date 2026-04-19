import express, { Request, Response } from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "API is running 🚀" });
});

app.use(authRoutes);

export default app;
