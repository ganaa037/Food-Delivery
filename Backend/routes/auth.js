import { Router } from "express";
import { login, sendMailer } from "../controllers/auth.js";
export const authRouter = Router();
authRouter.post("/login", login).get("/mail", sendMailer);
