import express, { Request, Response } from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import clothesRoutes from "./routes/clothing.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true, //para cookie funcionar
  }),
);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "API is running 🚀" });
});

app.use(authRoutes);
app.use("/clothes", clothesRoutes);

export default app;
