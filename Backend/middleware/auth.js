import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";

configDotenv();
const secret_key = process.env.SECRET_KEY;
export const veryfyToken = (req, res, next) => {
  console.log(req.header);
  next();
};
