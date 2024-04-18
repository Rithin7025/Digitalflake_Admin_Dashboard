import React from 'react'

function LoginForm() {
  return (
    <div>
  <div className="flex flex-col md:items-center sm:items-center lg:items-baseline justify-center lg:px-16 px-6 py-8 mx-auto md:h-screen  lg:py-0 shadow-lg">
     
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8"> 

          <a href="#" className="flex  flex-col items-center text-2xl gap-2 text-gray-900 dark:text-white">
          <img className="w-11 h-12 mr-2" src="https://firebasestorage.googleapis.com/v0/b/digitalflake-admin-dashboard.appspot.com/o/digitalflake_cropped.png?alt=media&token=dfcf7e68-57f4-4aef-b899-fcef8a44e044" alt="logo" />
          <p className='font-medium '><span className='font-bold'>digital</span>flake</p>    
      </a>     <div className='flex flex-col items-center'>

              <p className='lg:text-lg text-neutral-600'>welcome to Digitalflake Admin</p>
      </div>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email id</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border focus:border-blue-600 focus:outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="johndoe@gmail.com" required="" />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:outline-none focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-blue-600  dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>

                  <button className="p-3  bg-[#662671] w-full rounded-lg font-semibold text-white">Login</button>

                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  
              </form>
          </div>
      </div>
  </div>
</div>
  )
}

export default LoginForm