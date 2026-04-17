import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "API is running 🚀" });
});

export default app;
