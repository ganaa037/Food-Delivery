import { UserModel } from "../model/user.js";
import bcrypt from "bcrypt";
export const createUser = async (req, res) => {
  const { email, phoneNumber, address, isVerified, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword, "pass");

  try {
    const oldUser = await UserModel.find({ email: email });
    console.log(oldUser, "user");

    if (oldUser.length > 0)
      return res
        .status(405)
        .send({ success: false, message: "user already created" });
    const user = await UserModel.create({
      email: email,
      password: hashedPassword,
      phoneNumber: phoneNumber,
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
export const getUsers = async (_, res) => {
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
