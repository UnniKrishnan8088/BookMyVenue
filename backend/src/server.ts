import app from "./app.js";
import { connectDB } from "./config/database.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  // Connect to database
  await connectDB();

  // Start Express listener
  app.listen(PORT, () => {
    console.log(
      `🚀 Server is running on port ${PORT} in ${process.env.NODE_ENV || "development"} mode`,
    );
  });
};

startServer().catch((error) => {
  console.error("❌ Failed to start server:", error);
  process.exit(1);
});
