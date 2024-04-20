import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
        <div className="p-8 space-y-8" >
          <div className='flex flex-col items-center'>
            <p className='text-lg font-semibold text-purple-900'>Did you forget your password ?</p>
          </div>

          <p className="text-center text-slate-500">Enter your email address and wait, we'll send you a link to restore password </p>
          <form className="space-y-8" action="" >

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"

                className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="johndoe@gmail.com"
                required
              />
            </div>
            <button className="p-3 bg-[#662671] w-full rounded-lg font-semibold text-white">Request reset link</button>
            <div className="flex items-center justify-center">
              <Link to={'/login'}>
              <button className='text-slate-500 hover:underline font-semibold'>Back to login</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
