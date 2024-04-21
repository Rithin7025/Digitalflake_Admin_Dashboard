import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { RiExpandUpDownFill } from "react-icons/ri";
import axios from 'axios';
import {toast} from 'react-toastify'





function CategoryView({ handleAddNewCategory ,handleEditCategory }) {
  const [categoryList,setCategoryList] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');

  
  useEffect(()=>{
    //fetch category on component mount
    fetchCategories();
  },[]);
  //func to fetch categories
  const fetchCategories = async() => {
    try {
        const res = await axios.get('/api/admin/allCategory',{
            params : {search : searchTerm}
        });
        console.log(res)
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
 //handle delete
    const handleDelete = async(categoryId) => {
        console.log(categoryId)
        try{
         const res = await axios.delete(`/api/admin/deleteCategory/${categoryId}`);
         //Remove the deleted category
         setCategoryList(prevCategoryList => prevCategoryList.filter(category => category._id !== categoryId));
         // Show a success message
        toast.success('Category deleted successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
         res.status(200).json('category deleted')
        }catch(error){
            console.log(error)
            if(error?.response?.status == 404){
                toast.error('No category, try again', {
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

const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
}

const handleSearch = () => {
    fetchCategories();
}
  return (
    <div className='p-5 mt-8 flex flex-col lg:mt-12 '>
       <div className='h-10 w-full mb-3 flex items-center md:justify-between lg:justify-between '>
        {/*category*/}
               <div className='hidden lg:flex md:flex items-center px-2 gap-2 '>
      <TbCategory className=''/>  
      <p className='text-sm font-semibold lg:text-xl'>Category</p>
    </div>
        {/*Search*/}
            <div className='flex items-center'>
            <input type="text" name="search" id="search" placeholder='   search' onChange={handleSearchChange}  className='lg:w-96 lg:h-9 md:w-52 w-32 outline-none   border-2 rounded-lg ' />
            <button onClick={handleSearch} className='text-sm  p-1 lg:p-2 bg-green-400 rounded-lg text-white hover:font-semibold lg:ml-2 hover:bg-green-700'>Search</button>
            </div>
        {/*Add new button*/}
            <div >
            <button onClick={() =>handleAddNewCategory('categoryAdd')} className='w-16 h-7 text-xs lg:p-2 lg:w-40 lg:h-9 lg:text-sm text-white font-semibold rounded-lg hover:bg-purple-800 bg-[#662671]'> Add New</button>
            </div>
       </div>

<div className="overflow-x-auto overflow-y-scroll sm:overflow-x-scroll">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-[#FFF8B7] dark:bg-gray-700 dark:text-gray-400">
            <tr >
                <th scope="col" className="px-4 py-3 ">
                    ID
                </th>
                <th scope="col" className="px-4 py-3 ">
                    Name
                </th>
                <th scope="col" className="px-8 py-3 flex items-center justify-center">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    
                </th>
                <th scope="col" className="px-6 py-3">
                   
                </th>
            </tr>
        </thead>
        <tbody>
            {
                categoryList.map((category)=> (
                    <tr key={category._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {category?.id}
                </td>
                <td scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {category?.categoryName}
                </td>
                <td scope="row" className="flex items-center justify-center px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {category?.description}
                </td>
                <td className={`px-6 py-4 ${category?.status ? 'text-green-500' : 'text-red-600'}`}>
                   {category?.status ? 'Active' :'Inactive'} {/**if the category.status is true , show Active an if false show Inactive */}
                </td>
                <td className="hover:cursor-pointer px-2 py-4">
                <FaRegEdit onClick={()=> handleEditCategory(category._id)}/>
                </td>
                <td className= "flex justify-center px-full py-4 hover:cursor-pointer">
                    <MdDelete onClick={()=> handleDelete(category._id)} />

                </td>
            </tr>
                ))
            }
            
           
           
        </tbody>
    </table>
</div>

    </div>
  )
}

export default CategoryView