import { UserModel } from "../model/user.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = UserModel.findOne({ email: email });
    console.log(user);
  } catch (error) {}
};
