import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateForm } from "../utils/Validateform"; //function to check errors in the form
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";

function LoginForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.persistedReducer.user.currentUser);
  useEffect(() => {
    if (currentUser) {
      navigate("/home"); // Redirect to home if user is already logged in
    }
  }, [currentUser, navigate]);

  const handleChange = (e) => {
    setFormError({});
    setFormData({
      ...formData,
      [e.target.id]: [e.target.value],
    });
  };
   
  
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      //set the errors returned from validate form
      setFormError(validateForm(formData));
      if (Object.keys(formError).length === 0){

          setLoading(true);
          const res = await axios.post("/api/admin/auth/login", formData);
        const data = await res.data
        console.log(data)
        setLoading(false) //makes the loading effect false
        dispatch(signInSuccess(data))
        navigate('/home')
       
      } 
      
    } catch (error) {
      setLoading(false);
      console.log(error);
      //if user with the email not found
      if(error.response?.status == 404){
        setFormError({email : 'User not found. Please check your email'})
      }
            //if the user with the email found but not the same password
            if(error.response?.status == 401){
                setFormError({password : 'Incorrect password.Check your password and enter again'})
              }
      
    }
  };
  return (
    <div>
      <div className="flex flex-col md:items-center sm:items-center lg:items-baseline justify-center lg:px-16 px-6 py-8 mx-auto md:h-screen  lg:py-0 shadow-lg">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <a
              href="#"
              className="flex  flex-col items-center text-2xl gap-2 text-gray-900 dark:text-white"
            >
              <img
                className="w-11 h-12 mr-2"
                src="https://firebasestorage.googleapis.com/v0/b/digitalflake-admin-dashboard.appspot.com/o/digitalflake_cropped.png?alt=media&token=dfcf7e68-57f4-4aef-b899-fcef8a44e044"
                alt="logo"
              />
              <p className="font-medium ">
                <span className="font-bold">digital</span>flake
              </p>
            </a>{" "}
            <div className="flex flex-col items-center">
              <p className="lg:text-lg text-neutral-600">
                welcome to Digitalflake Admin
              </p>
            </div>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                {/* error message to display if any */}
                <div className="flex justify-between">
                  {!formError.email && (
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email id (Adminn00@gmail.com)
                    </label>
                  )}

                  {/* display error message of email */}
                  {formError.email && (
                    <p className="text-red-600 text-xs text-right mb-5 ">
                      {formError.email}
                    </p>
                  )}
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border focus:border-blue-600 focus:outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="johndoe@gmail.com"
                  required={true}
                  onChange={handleChange}
                />
              </div>
              <div>
                {/* error message to display if any */}
                <div className="flex justify-between">
                  {!formError.password && (
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      password(*123456As  )
                    </label>
                  )}
                  {/* display error messages regarding password */}
                  {formError.password && (
                    <p className="text-red-600 text-xs text-right mb-5 ">
                      {formError.password}
                    </p>
                  )}
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:outline-none focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-blue-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="p-3 bg-[#662671] w-full disabled:opacity-75 rounded-lg font-semibold text-white"
              >
                {loading ? "Signing in.." : "Login"}
              </button>
              
              <div className="flex items-center justify-between">
                <div className="flex items-start"></div>
                <Link to={"/forgotPassword"}>
                  <p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Forgot password?
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
