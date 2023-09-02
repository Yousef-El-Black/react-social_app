import dotenv from "dotenv";

dotenv.config();

export const { PORT, MONGODB_ATLAS, PEPPER, SALT_ROUNDS, JWT_SEC } =
  process.env;
