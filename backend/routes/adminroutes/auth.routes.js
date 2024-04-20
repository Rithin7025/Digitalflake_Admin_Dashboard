import express from 'express'
const router = express.Router()

import { adminSignin,adminSignup, logout } from '../../controllers/admin.controller.js'

//sample route to create an admin
router.post('/signup',adminSignup)

//Route to handle user login
router.post('/login',adminSignin)

//Route to handle reset password
router.post('/resetPassword')

//Route to handle admin logout
router.post('/logout', logout)

export default router