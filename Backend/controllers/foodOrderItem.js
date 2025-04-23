import { FoodOrderItemModel } from "../model/foodOrderItem.js";

export const createfoodOrderItem = async (req, res) => {
  const { food, quantity } = req.body;
  try {
    const foodOrderItem = await FoodOrderItemModel.create({
      food: food,
      quantity: quantity,
    });
    return res.status(200).send({
      success: true,
      foodOrderItem: foodOrderItem,
    });
  } catch (error) {
    console.error(error, "err");
    return res.status(400).send({ success: false, message: error });
  }
};
export const getFoodOrderItem = async (req, res) => {
  try {
    const foodOrderItem = await FoodOrderItemModel.find();
    return res
      .status(200)
      .send({
        success: true,
        foodOrderItem: foodOrderItem,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res.status(400).send({ success: false, message: error });
  }
};
export const getFoodOrderItemById = async () => {
  const { id } = req.params;
  try {
    const foodOrderItem = await FoodOrderItemModel.findById(id);
    return res
      .status(200)
      .send({ success: true, foodOrderItem: foodOrderItem });
  } catch (error) {
    console.error(error, "err");
    return res.status(200).send({ success: false, message: error });
  }
};
