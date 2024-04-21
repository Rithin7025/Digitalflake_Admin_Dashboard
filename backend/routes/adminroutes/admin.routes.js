import express from "express";

const router = express.Router();

import {addCategory, editCategory , getAllCategories, deleteCategory, addProduct, getAllProducts, deleteProduct, getCategory, getProduct, editProduct} from '../../controllers/admin.controller.js';
import { verifyAdminToken } from "../../middlewares/verifyAdminrole.js";

//Route to add a new Category
router.post("/addCategory",verifyAdminToken, addCategory);

//Route to add a new Product category
router.post("/addProduct",verifyAdminToken, addProduct);

//Route to retrieve particular category
router.get("/category/:id",verifyAdminToken , getCategory);

//Route to retrieve particular product
router.get("/product/:id",verifyAdminToken , getProduct);

//Route to retrieve all category
router.get("/allCategory",verifyAdminToken , getAllCategories);

//Route to retrieve all products
router.get("/allProducts",verifyAdminToken, getAllProducts);

//Route to retrieve all
router.get("/allproducts");

//Route to edit category
router.put("/editCategory/:id", verifyAdminToken , editCategory );

//Route to edit category
router.delete("/deleteCategory/:id", verifyAdminToken , deleteCategory );

//Route to edit Product
router.put("/editProduct/:id",verifyAdminToken,editProduct);

//Route to delete Product
router.delete("/deleteProduct/:id",verifyAdminToken,deleteProduct );

export default router;
