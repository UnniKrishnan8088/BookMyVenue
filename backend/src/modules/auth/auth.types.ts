export type SendOtpDTO = {
  email: string;
};

export type VerifyOtpDTO = {
  email: string;
  otp: string;
};

export type JwtPayload = {
  id: string;
  email: string;
  role: string;
};
