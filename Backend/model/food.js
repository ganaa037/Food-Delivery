import mongoose, { Schema } from "mongoose";
const foodSchema = new mongoose.Schema({
  foodName: String,
  price: Number,
  image: String,
  ingredients: String,
<<<<<<< HEAD
  category:{
=======
  categories: {
>>>>>>> 24a13ddbde751f07e922f4824cd650320401682b
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
