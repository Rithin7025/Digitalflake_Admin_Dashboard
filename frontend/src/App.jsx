import { BrowserRouter,Route,Routes } from "react-router-dom"
import Login from "./pages/Adminpages/Login"
import ForgotPassword from "./pages/ForgotPassword"
import PasswordReset from "./pages/PasswordReset"
import Home from "./pages/Home"
import React from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
    <ToastContainer />
   <BrowserRouter>
    <Routes>
      
      <Route path="login" element={<Login/>} />
      <Route path="forgotPassword" element={<ForgotPassword/>} />
      <Route path="home" element={<Home/>} />
    </Routes>
   
   </BrowserRouter>
    </>
  )
}

export default App
