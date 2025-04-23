import express from "express";
import {
  createfoodOrderItem,
  getFoodOrderItem,
  getFoodOrderItemById,
} from "../controllers/foodOrderItem.js";

export const foodOrderItemRouter = express.Router();

foodOrderItemRouter
  .post("/", createfoodOrderItem)
  .get("/", getFoodOrderItem)
  .get("/:id", getFoodOrderItemById);
