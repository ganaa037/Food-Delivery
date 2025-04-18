import express from "express";
import { createUser, getUsers, getUsersById } from "../controllers/user.js";

export const userRouter = express.Router();
userRouter.post("/", createUser).get("/", getUsers).get("/:id", getUsersById);
    