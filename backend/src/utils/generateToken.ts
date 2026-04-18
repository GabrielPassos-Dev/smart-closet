import jwt from "jsonwebtoken";

export function generateToken(userId: string) {
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error("JWT_SECRET_NOT_DEFINED");
  }

  return jwt.sign({ sub: userId }, jwtSecret, {
    expiresIn: "7d",
  });
}
