import prisma from "../../config/database.js";

export class AuthRepository {
  async createOtp(email: string, otp: string, expiresAt: Date) {
    return prisma.otp.create({
      data: {
        email,
        otp,
        expiresAt,
      },
    });
  }

  async findOtp(email: string, otp: string) {
    return prisma.otp.findFirst({
      where: {
        email,
        otp,
        verified: false,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async verifyOtp(id: string) {
    return prisma.otp.update({
      where: { id },
      data: {
        verified: true,
      },
    });
  }

  async findUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  async createUser(email: string) {
    return prisma.user.create({
      data: {
        email,
        isVerified: true,
      },
    });
  }
}
