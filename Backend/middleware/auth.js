import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";

configDotenv();
const secret_key = process.env.SECRET_KEY;
export const veryfyToken = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header)
      res.send({
        success: false,
        message: "token not found",
      });
    const token = header.split(" ")[1];
    console.log(token, "token");

    const decode = await jwt.verify(token, secret_key);
    if (decode._doc._id) {
      res.status(401).send({
        success: true,
        message: "Unauthorized",
      });
    }
    console.log(decode_doc._id, "decode");

    console.log(req.header);
    next();
  } catch (error) {
    res.send({
      error: error,
    });
  }
};
