import express from "express";

import {
  createFood,
  getFood,
  getFoodById,
  getFoodsByCategoryId,
  getFoodsCategoryById,
} from "../controllers/food.js";
import { veryfyToken } from "../middleware/auth.js";

export const foodRouter = express.Router();
foodRouter
  .post("/", createFood)
  .get("/", getFoodsCategoryById)
  .get("/:id", getFoodById)
  .get("/bycategory/:categoryID", getFoodsByCategoryId);
