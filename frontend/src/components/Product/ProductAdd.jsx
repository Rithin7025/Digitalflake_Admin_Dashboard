import React,{useState,useEffect} from 'react'
import { IoMdArrowBack } from "react-icons/io";
import axios from 'axios'
import {toast} from 'react-toastify'

// MULTIPLE ISSUE WITH THE SAME ID -----------------------------------------------------------DEBUG 
function ProductAdd({handleAddNewProduct}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenStatus, setIsOpenStatus] = useState(false);
    const [categoryList,setCategoryList] = useState([]);
    const [value,setValue] = useState('')
    const [status,setStatus] = useState('Active')
    

    // Function to toggle open and close of dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    // Function to toggle open and close of  status active or Inactive
    const toggleDropdownStatus = () => {
        setIsOpenStatus(!isOpenStatus);
    }


      // Function to set the status to input text and close dropdown
      const setStatusAndCloseDropdown = (statusValue) => {
        setStatus(statusValue);
        setIsOpenStatus(false);
    }
    
    useEffect(()=>{
        //fetch category on component mount
        fetchCategories();
      },[]);
    
      const fetchCategories = async() => {
        try {
            const res = await axios.get('/api/admin/allCategory')
            
            setCategoryList(res.data);
    
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
        }
    }
    
  return (
    <div className='mt-10'>
        {/* heading */}
        <div className='flex items-center pl-5 pt-6 gap-2'>
                    <IoMdArrowBack className='text-2xl text-slate-600 hover:cursor-pointer' onClick={()=> handleAddNewProduct('products')}/>
                    <p className='font-semibold text-2xl '>Add Product</p>
                </div>

        {/* inputs */}

        <div className='mt-4'>
            {/* first three input */}
            <div className='flex flex-col lg:flex-row justify-between  px-2 pr-2'>

            <div className="relative lg:flex-1 m-2">
            <input
                        type="text"
                        name="categoryName"
                        value={value}
                        id="categoryName"
                        className='w-full border border-[#686868] focus:ring-blue-500 focus:border-blue-500 focus:outline-none rounded-lg py-2 pl-8 relative' placeholder='categoryName'
                        readOnly
                        style={{ color: '#686868', fontSize: '14px' }} 
                    />
                    <button
                        type="button"
                        onClick={toggleDropdown}
                        className="absolute right-0 flex items-center top-0 h-full bg-gray-200 rounded-r-lg cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-6 text-gray-600">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M7 10l5 5 5-5H7z" />
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="absolute top-0 right-0 mt-11 w-32 bg-gray-100 border border-gray-300 rounded-lg shadow-lg z-10">
                            {categoryList.map(category => (
                                <button key={category._id}
                                onClick={() => {setValue(category.categoryName) ; toggleDropdown()}}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-400 focus:outline-none"
                            >
                                {category.categoryName}
                            </button>
                            )) }
                            
                        </div>  
                    )}
                </div>
                <div className="relative lg:flex-1 m-2">
                    <input type="text" id="productName" name="productName" className="w-full border border-[#686868] focus:ring-blue-500 focus:border-blue-500 focus:outline-none rounded-lg py-2 pl-8" placeholder="Product Name"
    style={{ color: '#686868', fontSize: '14px' }}  />
                    {/* <label htmlFor="description" className="absolute top-2 left-3 text-gray-500 text-sm">Product Name</label> */}
                </div>
                <div className="relative lg:flex-1 m-2">
                    <input type="text" id="packSize" name="packSize" className="w-full border border-[#686868] focus:ring-blue-500 focus:border-blue-500 focus:outline-none rounded-lg py-2 pl-8" placeholder="Pack Size"
    style={{ color: '#686868', fontSize: '14px' }} />
                </div>
            </div>
            
            {/* second three input */}
            <div className='flex flex-col lg:flex-row justify-between  px-2 pr-2'>
            <div className="relative lg:flex-1 m-2">
                    <input type="text" id="price" name="price" className="w-full border border-[#686868] rounded-lg py-2 pl-8 focus:outline-none focus:ring-blue-500 focus:border-blue-500 " placeholder="MRP"
    style={{ color: '#686868', fontSize: '14px' }} />
                </div>
                <div className="     lg:flex-1 m-2">
                    <input type="text" id="image" name="image" className="w-full border border-[#686868] focus:ring-blue-500 focus:border-blue-500 focus:outline-none rounded-lg py-2 pl-8" placeholder="ProductImage"
    style={{ color: '#686868', fontSize: '14px' }} />
                </div>
                <div className="relative lg:flex-1 m-2">
            <input
                        type="text"
                        name="categoryName"
                        value={status}
                        id="categoryName"
                        className='w-full border border-[#686868] focus:ring-blue-500 focus:border-blue-500 focus:outline-none rounded-lg py-2 pl-8 relative' placeholder='categoryName'
                        readOnly
                        style={{ color: '#686868', fontSize: '14px' }} 
                    />
                    <button
                        type="button"
                        onClick={toggleDropdownStatus}
                        className="absolute right-0 flex items-center top-0 h-full bg-gray-200 rounded-r-lg cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-6 text-gray-600">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M7 10l5 5 5-5H7z" />
                        </svg>
                    </button>
                    {isOpenStatus && (
                        <div className="absolute top-0 right-0 mt-11 w-32 bg-gray-100 border border-gray-300 rounded-lg shadow-lg z-10">
                            <button
                                onClick={() => setStatusAndCloseDropdown('Active')}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-400 focus:outline-none"
                            >
                                Active
                            </button>
                            <button
                                onClick={() => setStatusAndCloseDropdown('InActive')}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-400 focus:outline-none"
                            >
                                Inactive
                            </button>
                            
                        </div>
                    )}
                </div>
            </div>
        </div>

         {/* cancel and save button */}
         <div className='flex gap-4 lg:justify-end justify-center mt-44 ml-6 md:mt-96 lg:mt-72 lg:mr-6'>
                    <button onClick={()=> handleAddNewProduct('products')} className='p-3 lg:p-5 w-20 lg:w-44 h-8 items-center flex justify-center rounded-3xl bg-[#FFFFFF] hover:bg-violet-500 hover:text-white border border-[#676767] text-blue-800'> cancel </button>
                    <button className='p-3 lg:p-5 w-20 lg:w-44 h-8 items-center bg-[#662671] flex justify-center rounded-3xl hover:bg-purple-800 border--[#662671]  text-white'>Save</button>
            </div>
    </div>
  )
}

export default ProductAdd