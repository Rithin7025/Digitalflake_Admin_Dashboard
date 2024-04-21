import Product from "../models/product.model.js";
import Category from "../models/category.model.js";
import User from "../models/user.model.js";
import Counter from "../models/counter.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

//admin signup
export const adminSignup = async (req, res, next) => {
  const { name, password, email } = req.body;

  const hashedPassword =await bcrypt.hashSync(password, 10);
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
  console.log('entered Admin signIn❤️❤️❤️🚀🚀🚀🚀🚀🚀🚀🚀')
  try {
     const { email , password } = req.body;
     //find the user by email

     const user = await User.findOne({email});
     //check if the user exists
     if(!user){
      const userNotFoundError = new Error('User not found');
      userNotFoundError.statusCode = 404;
     return next(userNotFoundError);
     }   

     //compare the passwords
     const pas = password[0] ;  //taking the first element as the password from req.body's format is ['Password125']
     const isPasswordValid = await bcrypt.compareSync(pas, user.password);
     
     if(!isPasswordValid){
      const incorrectPasswordError = new Error('Incorrect Password');
      incorrectPasswordError.statusCode = 401;
     return  next(incorrectPasswordError)
     }

     const token = jwt.sign({id : user._id , role : user.role }, process.env.JWTSECRET, {expiresIn : '1h'});
     console.log(token, 'here is the token 👏')
     const {password : pass, ...userInfo} = user._doc

     res.cookie('access_token',token, {httpOnly : true}).status(200).json({success : true , message : 'Logged In successfully', userInfo})

  } catch (error) {
   return  next(error)
  }
};   


export const addCategory = async(req,res,next) => {
  try{
    const {categoryName , description, status } = req.body ;

    console.log('entered😂😂😂😂')  
    console.log(categoryName,description,status)
    //asign true is status is Activ
    const categoryStatus = status == 'Active' ? true : false

    // Check if category name and description are provided
    if(!categoryName || !description) {
      const CategoryError = new Error('Category name and description are required');
      CategoryError.statusCode = 400;
     return next(CategoryError)
    }

    const existingCategory = await Category.findOne({categoryName});
    if(existingCategory){
      const categoryAddError = new Error('Category Already exists');
      categoryAddError.statusCode = 409;
      return next(categoryAddError)

    }
    //creating a new category

    //Get the next id from the counter collection
    const counter = await Counter.findOneAndUpdate({}, { $inc: { count: 1 } }, { new: true, upsert: true });
    const newCategory = new Category({
      id : counter.count,
      categoryName,
      description,
      status: categoryStatus || false //save as inactive if status is not provided
    })
    // saving the newCategory
   const savedCategory =  await newCategory.save(); 

   return res.status(201).json({success : true , message : 'new Category created', category : savedCategory})
    
  }catch(error){
   return next(error)
  }
}


//edit category
export const editCategory = async(req,res,next) => {
  console.log(req.body)
  console.log(req.params.id)
  const categoryId = req.params.id;
  const {categoryName , description, status } = req.body;
  const categoryStatus = status == 'Active' ? true : false

  try {

    //handle error where the category is not provided
    if(!categoryId){
      const CategoryIdError = new Error('Category Id not provided');
      CategoryIdError.statusCode = 400;
     return next(CategoryIdError)
    }
    const existingCategory = await Category.findOne({_id : categoryId})
    
        if(!existingCategory){
            const categoryNotFoundError = new Error('Category Not Found!!');
            categoryNotFoundError.statusCode = 404 ; 
          return  next(categoryNotFoundError)
        }

      //if category name is updated
      if(categoryName){
        existingCategory.categoryName = categoryName ; 
      }

      //if description is updated
      if(description){
        existingCategory.description = description ; 
      }
      //if status is provided 
      if(status !== undefined){
        existingCategory.status = categoryStatus ; 
      }

      const updatedCategory = await existingCategory.save();

      return res.status(200).json({success : true , message : 'Category updated successfully'})
  } catch (error) {
    next(error)
  }
}

export const addProduct = async(req,res,next) => {
  try {
     const {productName , category , packSize , image , price , status} = req.body;
     //validate product properties
     if(!productName || !category || !packSize || !image || !price || !status ){
        const productAddingError = new Error('Product details are essential')
        productAddingError.statusCode = 400;
      return  next(productAddingError);
     }

     //check if a product with the same name and category is already present
     const existingProduct = await Product.findOne({productName, category})
     if(existingProduct){
      const existingProductError = new Error('Cannot add the same product!')
      existingProduct.statusCode = 409;
     return next(existingProductError)
     }

     //creating a new product instance 
     const newProduct = new Product({
      productName,
      category,
      packSize,
      image,
      price,
      status
     })


     const savedProduct = await newProduct.save();
     
     return res.status(201).json({success : true , message : 'Product added successfully'})

  } catch (error) {
    
  }
}


export const logout = async(req,res,next)=> {
try{  
  console.log('❤️❤️❤️❤️❤️❤️')
  //clearing the JWT token from the client cookie 
  res.clearCookie('access_token');
  res.status(200).json({success : true , message : 'Admin Logged out successfully'})
}catch(error){
 return next(error)
}
}

export const getAllCategories = async(req,res,next) => {
  try {

    const { search } = req.query;
    if(search){
       // If search query is provided, perform search
       console.log('entered with params🍳🍳🍳🍳🍳🍳')
       console.log(search)
      const categories = await Category.find({categoryName : {$regex : search, $options : 'i'}});
      return res.status(200).json(categories)
    }
    const categories = await Category.find({}).sort({createdAt : -1});
    res.status(200).json(categories);
    
  } catch (error) {
    next(error)
  }
}

export const deleteCategory = async(req,res,next) => {
  const category = await Category.findById(req.params.id)
  try {
    if(!category){
      const CategoryError = new Error('No category found');
      CategoryError.statusCode = 404;
      return next(CategoryError)
    }
   
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    return res.status(200).json('category deleted successfully')
  } catch (error) {
    next(error)
  }
}