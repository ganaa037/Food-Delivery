import { FoodOrderItemModel } from "../model/foodOrderItem";

export const createfoodOrderItem = async (req, res) => {
  const { food } = req.body;
  try {
    const foodOrderItem = await FoodOrderItemModel.create({
      food: food,
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
    return res.status(200).send({
      success: true,
      foodOrderItem: foodOrderItem,
    });
  } catch (error) {}
};
