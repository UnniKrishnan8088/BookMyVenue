import { Request, Response } from "express"
import { AuthService } from "./auth.service"

export class AuthController {
  private service =
    new AuthService()

  sendOtp = async (
    req: Request,
    res: Response
  ) => {
    const result =
      await this.service.sendOtp(
        req.body.email
      )

    res.status(200).json(result)
  }

  verifyOtp = async (
    req: Request,
    res: Response
  ) => {
    const result =
      await this.service.verifyOtp(
        req.body.email,
        req.body.otp
      )

    res.status(200).json(result)
  }
}