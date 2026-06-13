import express from "express";
import helmet from "helmet";
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(morgan("dev"));
app.use(express.json());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/venues", venueRouter);
app.use("/api/v1/bookings", bookingRouter);

app.use(errorHandler);

export default app;
