import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
export const CategoryModel = mongoose.model("categories", categorySchema);
