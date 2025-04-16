import { UserModel } from "../model/user.js";

export const createUser = async (req, res) => {
  const { email, phoneaNumber, address, isVerified, password } = req.body;
  try {
    const user = await UserModel.create({
      email: email,
      password: password,
      phoneaNumber: phoneaNumber,
      address: address,
      isVerified: isVerified,
    });
    return res
      .status(200)
      .send({
        success: true,
        user: user,
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
export const getUsers = async (__, res) => {
  try {
    const users = await UserModel.find();
    return res
      .status(200)
      .send({
        success: true,
        users: users,
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
export const getUsersById = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await UserModel.findById(id);
    return res
      .status(200)
      .send({
        success: true,
        users: users,
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
