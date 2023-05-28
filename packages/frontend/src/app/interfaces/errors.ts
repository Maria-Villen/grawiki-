export interface IError extends Error {
  message: string;
  code?: number;
}
