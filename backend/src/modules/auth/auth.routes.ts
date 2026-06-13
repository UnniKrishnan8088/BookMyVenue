import { Router } from "express";
import { body } from "express-validator";
import { register, login, getMe } from "./auth.controller.js";
import { validateRequest } from "../../middleware/validate.js";
import { protect } from "../../middleware/auth.js";

const router = Router();

router.post(
  "/register",
  [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").trim().isEmail().withMessage("Please provide a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("role")
      .optional()
      .isIn(["USER", "OWNER", "ADMIN"])
      .withMessage("Invalid role"),
    validateRequest,
  ],
  register,
);

router.post(
  "/login",
  [
    body("email").trim().isEmail().withMessage("Please provide a valid email"),
    body("password").notEmpty().withMessage("Password is required"),
    validateRequest,
  ],
  login,
);

router.get("/me", protect, getMe);

export default router;
