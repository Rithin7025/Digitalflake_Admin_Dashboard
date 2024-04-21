import React, { useEffect, useState } from 'react';
import { IoMdArrowBack } from "react-icons/io";
import axios from 'axios'
import {toast} from 'react-toastify'


function CategoryEdit({handleAddNewCategory, categoryId}) {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState(true);
    const [categoryName,setCategoryName] = useState('')
    const [categoryDescription,setCategoryDescription] = useState('')
    useEffect(()=>{
        fetchCategoryDetails()
    },[])

    // Function to toggle open and close of dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    // Function to set the status to input text and close dropdown
    const setStatusAndCloseDropdown = (statusValue) => {
         
        setStatus(statusValue);
        setIsOpen(false);
    }

    //function to fetch details of the category
    const fetchCategoryDetails = async() => {
        try {
            const res = await axios.get(`/api/admin/category/${categoryId}`)
            const {categoryName, description} = res.data ; 
            console.log(res.data.status)
            setCategoryName(categoryName);  
            setCategoryDescription(description);
            setStatus(res.data.status)

        } catch (error) {
            console.log(error)
        }
    }

    //function to update category 
    const handleCategoryUpdate = async() => {
        try{
            const res = axios.put(`/api/admin/editCategory/${categoryId}`,{categoryName, categoryDescription})
            console.log(res.data)
            toast.success('Newcategoryy updated!', {
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

        }catch(error){
            console.log(error)
            if(error.response.status == 404){
                toast.error('category Not found', {
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
        }
    }

    return (
        <div className='flex flex-col gap-6  h-full w-full scroll-smooth  mt-10'>
            {/* Heading section */}
            <div>
                <div className='flex items-center pl-5 pt-6 gap-2'>
                    <IoMdArrowBack className='text-2xl text-slate-600 hover:cursor-pointer' onClick={()=> handleAddNewCategory('category')}/>
                    <p className='font-semibold text-2xl '>Edit Category</p>
                </div>
            </div>

            {/* Body section */}
            <div className="flex flex-col lg:flex-row justify-between  p-4 ">
                <div className="relative lg:flex-1 m-2">
                    <input type="text" id="categoryName" name="categoryName" value={categoryName} onChange={(e)=> setCategoryName(e.target.value)} placeholder="Category" style={{ color : '#686868',fontSize : '14px'}} className="w-full border-2 border-gray-300 rounded-lg py-2 pl-8 focus:outline-none focus:ring-blue-500 focus:border-blue-500 " />
                </div>
                <div className="relative lg:flex-1 m-2">
                    <input type="text" placeholder='Description' value={categoryDescription} onChange={(e)=> setCategoryDescription(e.target.value)} style={{color : '#686868',fontSize : '14px'}}  id="description" name="description" className="w-full border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none rounded-lg py-2 pl-8" />
                </div>
                {/* Input tag with dropdown */}
                <div className='relative flex-1 m-2'>
                    <input
                        type="text"
                        name="status"
                        value={status ? 'Active' : 'Inactive'}
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
                                onClick={() => setStatusAndCloseDropdown(true)}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-400 focus:outline-none"
                            >
                                Active
                            </button>
                            <button
                                onClick={() => setStatusAndCloseDropdown(false)}
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
                    <button onClick={()=> handleAddNewCategory('category')} className='p-3 lg:p-5 w-20 lg:w-44 h-8 items-center flex justify-center rounded-3xl bg-[#FFFFFF] hover:bg-violet-500 hover:text-white border border-[#676767] text-blue-800'> cancel </button>
                    <button onClick={handleCategoryUpdate} className='p-3 lg:p-5 w-20 lg:w-44 h-8 items-center border-2 bg-[#662671] flex justify-center rounded-3xl hover:bg-purple-800 hover:text-black border-[#662671]  text-white'>Save</button>
            </div>
          </div>
        </div>
    );
}

export default CategoryEdit;
