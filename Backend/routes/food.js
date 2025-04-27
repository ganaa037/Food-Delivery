import express from "express";

import {
  createFood,
  getFood,
  getFoodById,
  getFoodsByCategoryId,
} from "../controllers/food.js";

export const foodRouter = express.Router();
foodRouter
  .post("/", createFood)
  .get("/", getFood)
  .get("/:id", getFoodById)
  .get("/bycategory/:categoryID", getFoodsByCategoryId);
