import { BrowserRouter,Route,Routes } from "react-router-dom"
import Login from "./pages/Login"
import ForgotPassword from "./pages/ForgotPassword"

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login/>} />
      <Route path="forgotPassword" element={<ForgotPassword/>} />
    </Routes>
   
   </BrowserRouter>
  )
}

export default App
