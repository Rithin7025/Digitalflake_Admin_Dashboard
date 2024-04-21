import express from "express";

const router = express.Router();

import {addCategory, editCategory , getAllCategories, deleteCategory, addProduct, getAllProducts} from '../../controllers/admin.controller.js';
import { verifyAdminToken } from "../../middlewares/verifyAdminrole.js";

//Route to add a new Category
router.post("/addCategory",verifyAdminToken, addCategory);

//Route to add a new Product category
router.post("/addProduct",verifyAdminToken, addProduct);

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
router.put("/editProduct");

//Route to delete category
router.delete("/deleteCategory");

//Route to delete Product
router.delete("/deleteProduct");

export default router;
