import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
// MULTIPLE ISSUE WITH THE SAME ID -----------------------------------------------------------DEBUG 
function ProductAdd() {
  return (
    <div className='mt-10'>
        {/* heading */}
        <div className='flex items-center pl-5 pt-6 gap-2'>
                    <IoMdArrowBack className='text-2xl text-slate-600 hover:cursor-pointer' />
                    <p className='font-semibold text-2xl '>Add Product</p>
                </div>

        {/* inputs */}

        <div className='mt-4'>
            {/* first three input */}
            <div className='flex flex-col lg:flex-row justify-between  px-2 pr-2'>
            <div className="relative lg:flex-1 m-2">
                    <input type="text" id="categoryName" name="categoryName" className="w-full border border-[#686868] rounded-lg py-2 pl-8 focus:outline-none focus:ring-blue-500 focus:border-blue-500 "placeholder="Category"
    style={{ color: '#686868', fontSize: '14px' }}  />
                </div>
                <div className="relative lg:flex-1 m-2">
                    <input type="text" id="description" name="description" className="w-full border border-[#686868] focus:ring-blue-500 focus:border-blue-500 focus:outline-none rounded-lg py-2 pl-8" placeholder="Product Name"
    style={{ color: '#686868', fontSize: '14px' }}  />
                    {/* <label htmlFor="description" className="absolute top-2 left-3 text-gray-500 text-sm">Product Name</label> */}
                </div>
                <div className="relative lg:flex-1 m-2">
                    <input type="text" id="description" name="description" className="w-full border border-[#686868] focus:ring-blue-500 focus:border-blue-500 focus:outline-none rounded-lg py-2 pl-8" placeholder="Pack Size"
    style={{ color: '#686868', fontSize: '14px' }} />
                </div>
            </div>
            {/* second three input */}
            <div className='flex flex-col lg:flex-row justify-between  px-2 pr-2'>
            <div className="relative lg:flex-1 m-2">
                    <input type="text" id="categoryName" name="categoryName" className="w-full border border-[#686868] rounded-lg py-2 pl-8 focus:outline-none focus:ring-blue-500 focus:border-blue-500 " placeholder="MRP"
    style={{ color: '#686868', fontSize: '14px' }} />
                </div>
                <div className="relative lg:flex-1 m-2">
                    <input type="text" id="description" name="description" className="w-full border border-[#686868] focus:ring-blue-500 focus:border-blue-500 focus:outline-none rounded-lg py-2 pl-8" placeholder="Product Image"
    style={{ color: '#686868', fontSize: '14px' }} />
                </div>
                <div className="relative lg:flex-1 m-2">
                    <input type="text" id="description" name="description" className="w-full border border-[#686868] focus:ring-blue-500 focus:border-blue-500 focus:outline-none rounded-lg py-2 pl-8" placeholder="Status"
    style={{ color: '#686868', fontSize: '14px' }} />
                </div>
            </div>
        </div>

         {/* cancel and save button */}
         <div className='flex gap-4 lg:justify-end justify-center mt-44 ml-6 md:mt-96 lg:mt-72 lg:mr-6'>
                    <button className='p-3 lg:p-5 w-20 lg:w-44 h-8 items-center flex justify-center rounded-3xl bg-[#FFFFFF] hover:bg-violet-500 hover:text-white border border-[#676767] text-blue-800'> cancel </button>
                    <button className='p-3 lg:p-5 w-20 lg:w-44 h-8 items-center bg-[#662671] flex justify-center rounded-3xl hover:bg-purple-800 border--[#662671]  text-white'>Save</button>
            </div>
    </div>
  )
}

export default ProductAdd