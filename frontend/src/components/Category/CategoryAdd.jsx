import React, { useState } from 'react';
import { IoMdArrowBack } from "react-icons/io";
import {validateCategory} from '../../utils/validateCategory.js'
import axios from 'axios'
import {toast} from 'react-toastify'


function CategoryAdd({ handleAddNewCategory }) {
    console.log(handleAddNewCategory)
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState('Active');
    const [categoryData,setCategoryData] = useState({categoryName : '', description : ''});
    const [categoryError , setCategoryError] = useState({});
    console.log(categoryError)
    // Function to toggle open and close of dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
   

    // Function to set the status to input text and close dropdown
    const setStatusAndCloseDropdown = (statusValue) => {
        setStatus(statusValue);
        setIsOpen(false);
    }

    const handleChange = (e) => {
        const {name , value} = e.target ; 
        setCategoryError({})
        setCategoryData({...categoryData,[name] : value})
    }
     
    
    const handleCategorySubmit = async() => {
        setCategoryError(validateCategory(categoryData))
        try {
            if(Object.keys(categoryError).length == 0){
              categoryData.status = status ; 
              console.log(categoryData.status)
              const res = await axios.post('/api/admin/addCategory',categoryData)
              const data = res.data
              toast.success('New categoryy Added!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                
                });
                handleAddNewCategory('category')
                
            }
        } catch (error) {
            console.log(error)
             if(error.response?.status == 401){
                
                toast.error('token expired , Please login again', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
             }
             if(error.response?.status == 409){
                
                toast.error('Oops! category already exists', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
             }
        }
    }
    return (
        <div className='flex flex-col gap-6  h-full w-full scroll-smooth  mt-10'>
            {/* Heading section */}
            <div>
                <div className='flex items-center pl-5 pt-6 gap-2'>
                    <IoMdArrowBack className='text-2xl text-slate-600 hover:cursor-pointer' onClick={()=> handleAddNewCategory('category')} />
                    <p className='font-semibold text-2xl '>Add Category</p>
                </div>
            </div>
            {/* Body section */}
            <div className="flex flex-col lg:flex-row justify-between  p-4">
                <div className="relative lg:flex-1 m-2">
                    <input type="text" id="categoryName"  name="categoryName" onChange={handleChange} value={categoryData.categoryName} placeholder="Category" style={{ color : '#686868',fontSize : '14px'}} className="w-full border-2 border-gray-300 rounded-lg py-2 pl-8 focus:outline-none focus:ring-blue-500 focus:border-blue-500 " />
                   {
                    categoryError.categoryName && ( <p className='text-xs text-red-600 ml-1 mt-1'>{categoryError.categoryName}</p>)
                   } 
                </div>
                <div className="relative lg:flex-1 m-2">
                    <input type="text" placeholder='Description' onChange={handleChange} value={categoryData.description} style={{color : '#686868',fontSize : '14px'}}  id="description" name="description" className="w-full border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none rounded-lg py-2 pl-8" />
                    {
                    categoryError.description && ( <p className='text-xs text-red-600 ml-1 mt-1'>{categoryError.description}</p>)
                   } 
                </div>
                {/* Input tag with dropdown */}
                <div className='relative flex-1 m-2'>
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
                        className="absolute right-0 flex items-center top-0 h-11  px-1 bg-gray-200 rounded-r-lg cursor-pointer"
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
            <div className='flex gap-4 lg:justify-end justify-center mt-60 md:mt-40 lg:mt-72 lg:mr-6'>
                    <button onClick={() =>handleAddNewCategory('category')} className='p-3 lg:p-5 w-20 lg:w-44 h-8 items-center flex justify-center rounded-3xl bg-[#FFFFFF] hover:bg-violet-500 hover:text-white border border-[#676767] text-blue-800'> cancel </button>
                    <button onClick={handleCategorySubmit} className='p-3 lg:p-5 w-20 lg:w-44 h-8 items-center border-2 bg-[#662671] flex justify-center rounded-3xl hover:bg-purple-800 hover:text-black border-[#662671]  text-white'>Save</button>
            </div>
          </div>
        </div>
    );
}

export default CategoryAdd;
