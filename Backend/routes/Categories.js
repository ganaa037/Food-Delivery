import express from "express";

import {
  createCategory,
  getCategory,
  getCategoryById,
} from "../controllers/categories.js";

export const categoryRouter = express.Router();
categoryRouter
  .post("/", createCategory)
  .get("/", getCategory)
  .get("/:id", getCategoryById);
