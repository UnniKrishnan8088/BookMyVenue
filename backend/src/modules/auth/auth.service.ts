import { generateAccessToken, generateRefreshToken } from "../../utils/jwt.js";
import { sendMail } from "../../utils/mail.js";
import { generateOTP } from "../../utils/otp.js";
import { AuthRepository } from "./auth.repository";

export class AuthService {
  private repository = new AuthRepository();

  async sendOtp(email: string) {
    const otp = generateOTP();

    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    await this.repository.createOtp(email, otp, expiresAt);

    await sendMail({
      to: email,
      subject: "Login OTP",
      html: `
        <h1>${otp}</h1>
        <p>Valid for 5 minutes</p>
      `,
    });

    return {
      message: "OTP sent successfully",
    };
  }

  async verifyOtp(email: string, otp: string) {
    const otpRecord = await this.repository.findOtp(email, otp);

    if (!otpRecord) {
      throw new Error("Invalid OTP");
    }

    if (otpRecord.expiresAt < new Date()) {
      throw new Error("OTP expired");
    }

    let user = await this.repository.findUserByEmail(email);

    if (!user) {
      user = await this.repository.createUser(email);
    }

    await this.repository.verifyOtp(otpRecord.id);

    const accessToken = generateAccessToken(user);

    const refreshToken = generateRefreshToken(user);

    return {
      user,
      accessToken,
      refreshToken,
    };
  }
}
