import mongoose, { Schema } from "mongoose";
const foodOrderItems = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  food: { type: Schema.Types.ObjectId, ref: "Food", required: true },
});
const foodOrderSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  // foodOrderItems: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "FoodOrderItem",
  //     required: true,
  //   },
  // ],
  totalPrice: {
    type: Number,
    required: true,
  },

  foodOrderItems: {
    type: [foodOrderItems],
    required: true,
  },
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
