import { Request, Response, NextFunction } from "express";
import { sendOtpSchema, verifyOtpSchema } from "./auth.schema.js";

export const validateSendOtp = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  sendOtpSchema.parse(req.body);
  next();
};

export const validateVerifyOtp = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  verifyOtpSchema.parse(req.body);
  next();
};
