import express from "express";

const router = express.Router();

import {addCategory} from '../../controllers/admin.controller.js';
import { verifyAdminToken } from "../../middlewares/verifyAdminrole.js";

//Route to add a new Category
router.post("/addCategory",verifyAdminToken, addCategory);

//Route to add a new Product category
router.post("/addProduct");

//Route to retrieve all products
router.get("/allCategory");

//Route to retrieve all
router.get("/allproducts");

//Route to edit category
router.put("/editCategory");

//Route to edit Product
router.put("/editProduct");

//Route to delete category
router.delete("/deleteCategory");

//Route to delete Product
router.delete("/deleteProduct");

export default router;
