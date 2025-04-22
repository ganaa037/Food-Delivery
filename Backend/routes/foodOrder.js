import express from "express";
import {
  createFoodOrder,
  getFoodOrder,
  getFoodOrderById,
} from "../controllers/foodOrder";

export const foodOrderRouter = express.Router();
foodOrderRouter
  .post("/", createFoodOrder)
  .get("/", getFoodOrder)
  .get("/", getFoodOrderById);
