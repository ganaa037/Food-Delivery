import express from "express";

import { createFood, getFood, getFoodById } from "../controllers/food.js";

export const foodRouter = express.Router();
foodRouter.post("/", createFood).get("/", getFood).get("/:id", getFoodById);
