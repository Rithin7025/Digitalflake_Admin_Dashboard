import express from 'express'
import { deflate } from 'zlib'

const router = express.Router()

//Route to handle user login
router.post('/login')

//Route to handle reset password
router.post('/resetPassword')

//Route to add a new Category
router.post('/addCategory')

//Route to add a new Product
router.post('/addProduct')

//Route to retrieve all products
router.get('/allCategory')

//Route to retrieve all products
router.get('/allproducts')

//Route to edit category
router.put('/editCategory')

//Route to edit Product
router.put('/editProduct')

//Route to delete category
router.delete('/deleteCategory')

//Route to delete Product
router.delete('/deleteProduct')


export default router