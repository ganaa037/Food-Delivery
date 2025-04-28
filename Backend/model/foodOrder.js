import mongoose, { Schema } from "mongoose";
const foodOrderSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  totalPrice: Number,
  foodOrderItems: [{
    type: Schema.Types.ObjectId,
    ref: "FoodOrderItem",
    required: true,
  }],
  status: {
    type: String,
    enum: ["Fending", "Canceled", "Delivered"],
    default: "Fending",
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
export const FoodOrderModel = mongoose.model("FoodOrder", foodOrderSchema);
