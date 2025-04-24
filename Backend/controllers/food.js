import { CategoryModel } from "../model/categories.js";
import { FoodModel } from "../model/food.js";

export const createFood = async (req, res) => {
  const { foodName, price, image, ingredients, categories } = req.body;
  try {
    const food = await FoodModel.create({
      foodName: foodName,
      price: price,
      image: image,
      ingredients: ingredients,
      categories: categories,
    });
    return res
      .status(200)
      .send({
        success: true,
        food: food,
      })

      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};
export const getFood = async (_, res) => {
  try {
    const food = await FoodModel.find().populate("categories");
    return res
      .status(200)
      .send({
        success: true,
        food: food,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};
export const getFoodById = async (req, res) => {
  const { id } = req.params;
  try {
    const food = await CategoryModel.findById(id);
    return res
      .status(200)
      .send({
        success: true,
        food: food,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const getFoodsByCategoryId = async (req, res) => {
  const { categoryID } = req.params;
  try {
    const foodsByCategory = await FoodModel.find({
      categories: categoryID,
    }).populate("categories");
    const category = await CategoryModel.findById(categoryID);
    return res
      .status(200)
      .send({
        succes: true,
        category: category,
        foodsByCategory: foodsByCategory,
      })
      .end();
  } catch (error) {
    console.error(error, "error");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};
