import { BrowserRouter,Route,Routes } from "react-router-dom"
import Login from "./pages/Login"
import ForgotPassword from "./pages/ForgotPassword"
import Home from "./pages/Home"

function App() {

  return (
   <BrowserRouter>
    <Routes>
      
      <Route path="login" element={<Login/>} />
      <Route path="forgotPassword" element={<ForgotPassword/>} />
      <Route path="home" element={<Home/>} />
    </Routes>
   
   </BrowserRouter>
  )
}

export default App
