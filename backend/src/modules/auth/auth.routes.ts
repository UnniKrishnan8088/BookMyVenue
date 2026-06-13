import { Router } from "express"

import { AuthController } from "./auth.controller"

import {
  validateSendOtp,
  validateVerifyOtp,
} from "./auth.validation"

const router = Router()

const controller =
  new AuthController()

router.post(
  "/send-otp",
  validateSendOtp,
  controller.sendOtp
)

router.post(
  "/verify-otp",
  validateVerifyOtp,
  controller.verifyOtp
)

export default router