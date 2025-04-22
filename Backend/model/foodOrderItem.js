import mongoose, { Schema } from "mongoose";
const foodOrderItemSchema = new mongoose.Schema({
  food: { type: Schema.Types.ObjectId, ref: "Food", required: true },
  quantity: Number,
});
export const FoodOrderItemModel = mongoose.model(
  "FoodOrderItem",
  foodOrderItemSchema
);
