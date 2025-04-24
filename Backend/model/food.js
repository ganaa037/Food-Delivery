import mongoose, { Schema } from "mongoose";
const foodSchema = new mongoose.Schema({
  foodName: String,
  price: Number,
  image: String,
  ingredients: String,
  categories: {
    type: Schema.Types.ObjectId,
    ref: "categories",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
export const FoodModel = mongoose.model("Food", foodSchema);
