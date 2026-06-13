import { Request, Response } from "express";
import { AuthService } from "./auth.service.js";

export class AuthController {
  private service = new AuthService();

  sendOtp = async (req: Request, res: Response) => {
    const result = await this.service.sendOtp(req.body.email);

    res.status(200).json(result);
  };

  verifyOtp = async (req: Request, res: Response) => {
    const result = await this.service.verifyOtp(req.body.email, req.body.otp);

    res.status(200).json(result);
  };

  refreshToken = async (req: Request, res: Response) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(401).json({
        message: "Refresh token required",
      });
    }
  };
}
