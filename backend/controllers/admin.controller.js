import Product from "../models/product.model.js";
import Category from "../models/category.model.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";


//admin signup
export const adminSignup = async (req, res) => {
  const { name, password, email } = req.body;

    const hashedPassword = bcrypt.hashSync(password,10);
    const admin = new User({
      userName : name,
      password : hashedPassword,
      email,
    });
    try {
      admin.save();
  } catch (error) {
   res.status(500).json(error)
  }
};

//Handle admin login
export const adminSignin = async (req, res) => {
  try {
  } catch (error) {}
};
