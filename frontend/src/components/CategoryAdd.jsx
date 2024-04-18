import React, { useState } from 'react';
import { IoMdArrowBack } from "react-icons/io";

function CategoryAdd() {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState('');

    // Function to toggle open and close of dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    // Function to set the status to input text and close dropdown
    const setStatusAndCloseDropdown = (statusValue) => {
        setStatus(statusValue);
        setIsOpen(false);
    }

    return (
        <div className='flex flex-col gap-6  h-full w-full scroll-smooth lg:mt-10'>
            {/* Heading section */}
            <div>
                <div className='flex items-center pl-5 pt-6 gap-2'>
                    <IoMdArrowBack className='text-2xl text-slate-600 hover:cursor-pointer' />
                    <p className='font-semibold text-2xl '>Add Category</p>
                </div>
            </div>

            {/* Body section */}
            <div className="flex  flex-wrap justify-between mt-4 p-4 ">
                <div className="relative flex-1 mr-2">
                    <input type="text" id="categoryName" name="categoryName" className="w-full border-2 border-gray-300 rounded-lg py-2 pl-8 focus:outline-none focus:ring-blue-500 focus:border-blue-500 " />
                    <label htmlFor="categoryName" className="absolute top-2 left-3 text-gray-500 text-sm">Category Name</label>
                </div>
                <div className="relative flex-1 mr-2">
                    <input type="text" id="description" name="description" className="w-full border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none rounded-lg py-2 pl-8" />
                    <label htmlFor="description" className="absolute top-2 left-3 text-gray-500 text-sm">Description</label>
                </div>
                {/* Input tag with dropdown */}
                <div className='relative flex-1'>
                    <input
                        type="text"
                        name="status"
                        value={status}
                        id="status"
                        className='w-full border-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-lg py-2 pl-8 relative'
                        readOnly
                    />
                    <button
                        type="button"
                        onClick={toggleDropdown}
                        className="absolute right-0 flex items-center top-0 h-full px-1 bg-gray-200 rounded-r-lg cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-6 text-gray-600">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M7 10l5 5 5-5H7z" />
                        </svg>
                    </button>

                    {isOpen && (
                        <div className="absolute top-0 right-0 mt-11 w-32 bg-gray-100 border border-gray-300 rounded-lg shadow-lg">
                            <button
                                onClick={() => setStatusAndCloseDropdown('Active')}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-400 focus:outline-none"
                            >
                                Active
                            </button>
                            <button
                                onClick={() => setStatusAndCloseDropdown('Inactive')}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-400 focus:outline-none"
                            >
                                Inactive
                            </button>
                        </div>
                    )}
                </div>
            </div>
          <div>
            {/* cancel and save button */}
            <div className='flex gap-4 justify-end  lg:mt-72 lg:mr-6'>
                    <button className='p-5 w-44 h-2 items-center flex justify-center rounded-3xl bg-[#FFFFFF] border border-[#676767] text-blue-800'> cancel </button>
                    <button className='p-5 w-44 h-2 items-center bg-[#662671] flex justify-center rounded-3xl hover:bg-purple-800 border  text-white'>Save</button>
            </div>
          </div>
        </div>
    );
}

export default CategoryAdd;
