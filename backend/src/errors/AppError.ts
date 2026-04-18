export class AppError extends Error {
  constructor(
    public code: string,
    public statusCode: number,
    public message: string,
  ) {
    super(message);
  }
}
