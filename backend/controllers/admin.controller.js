import Product from "../models/product.model.js";
import Category from "../models/category.model.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

//admin signup
export const adminSignup = async (req, res, next) => {
  const { name, password, email } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);
  try {
    
    const admin = new User({
      userName: name,
      password: hashedPassword,
      email,
    });



  const newAdmin =  await admin.save();
  console.log(newAdmin)
  res.status(201).json({success : true , message : 'Admin signed up successfully'})
  } catch (error) {
    
   if(error.code == 11000 && error.keyPattern && error.keyValue.email){
    const duplicateEmailError = new Error("Email already exists")
          duplicateEmailError.statusCode = 400;
          next(duplicateEmailError)
   }else {
     next(error); //passing the error to the middleware errorhandler.js
   }
  }
};

//Handle admin login
export const adminSignin = async (req, res, next) => {
  try {
     const { email , password } = req.body;
     //find the user by email
     const user = await User.findOne({email});
     //check if the user exists
     if(!user){
      const userNotFoundError = new Error('User not found');
      userNotFoundError.statusCode = 404;
      next(userNotFoundError);
     }
     //check if the user is blocked
     if(user.isBlocked){
      const blockedUserError = new Error("Accout is blocked")
      blockedUserError.statusCode = 403;
      next(blockedUserError)
     }

     //compare the passwords
     const isPasswordValid = await bcrypt.compareSync(password, user.password);
     
     if(!isPasswordValid){
      const incorrectPasswordError = new Error('Incorrect Password');
      incorrectPasswordError.statusCode = 401;
      next(incorrectPasswordError)
     }

     const token = jwt.sign({id : user._id , role : user.role }, process.env.JWTSECRET, {expiresIn : '1h'});
     console.log(token, 'here is the token 👏')
     const {password : pass, ...userInfo} = user._doc

     res.cookie('access_token',token, {httpOnly : true}).status(200).json({success : true , message : 'Logged In successfully', userInfo})

  } catch (error) {
     next(error)
  }
};
