import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import "dotenv/config";

// Create a connection pool using the postgres driver
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// Configure the driver adapter for Prisma 7
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "info", "warn", "error"]
      : ["error"],
});

export const connectDB = async () => {
  try {
    // Verify pool connection directly
    await pool.query("SELECT 1");
    console.log(
      "🚀 Database connected successfully to PostgreSQL via Prisma & PG Adapter",
    );
  } catch (error) {
    console.error("❌ Database connection failed:");
    console.error(error);
    process.exit(1);
  }
};

export default prisma;
