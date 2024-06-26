import React, { useEffect, useState } from 'react'
import { IoIosCart } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import axios from 'axios'
import {toast} from 'react-toastify'


function Productview({handleAddNewProduct,handleEditProduct}) {

    const [productsList,setProductsList] = useState([]);
    const [searchTerm,setSearchTerm] = useState('')

    useEffect(()=>{

        fetchProducts();
    },[])

    //function to fetch all products/specific products based on search
    const fetchProducts = async() => {
        try {
                const res = await axios.get('/api/admin/allProducts',{params : {search : searchTerm}})

                console.log(res)
                setProductsList(res.data);
                console.log(productsList)
            } catch (error) {
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
    //function to handle search change
    const handleSearchChange = (e) =>{
        setSearchTerm(e.target.value)
    }
    //function to handle search
    const handleSearchSubmit= () =>{
    fetchProducts();
    
    }
    // function to handle delete
    const handleProductDelete = async(productId) => {
    try {
        const res = await axios.delete(`/api/admin/deleteProduct/${productId}`);
        setProductsList(prevProductList => prevProductList.filter(product => product._id !== productId));
        toast.success('Product deleted successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    } catch (error) {
        if(error?.response?.status == 404){
            toast.error('No Product, try again', {
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
    <div className='p-5 flex flex-col mt-10'>
    <div className='h-10 w-full mb-3 flex items-center justify-between '>
     {/*category*/}
         <div className='hidden lg:flex items-center px-2 gap-2'>
         <IoIosCart />
         <p className='font-semibold sm:text-sm'>Products</p>
         </div>
     {/*Search*/}
         <div className='flex items-center'>
         <input type="text" name="search" id="search" onChange={handleSearchChange} className='lg:w-96 lg:h-9 md:w-52 w-32 outline-none  border-2 rounded-lg' />
         <button onClick={handleSearchSubmit}  className='text-sm  p-1 lg:p-2 bg-green-400 rounded-lg text-white hover:font-semibold lg:ml-2 hover:bg-green-700'>Search</button>

         </div> 
     {/*Add*/}
         <div>
         <button onClick={() =>handleAddNewProduct('productAdd')} className='w-16 h-7 text-xs lg:p-2 lg:w-40 lg:h-9 lg:text-sm text-white font-semibold rounded-lg hover:bg-purple-800 bg-[#662671]'> Add New</button>
         </div>
    </div>
<div className="relative overflow-x-auto">
 <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
     <thead className="text-xs text-gray-700 uppercase bg-[#FFF8B7] dark:bg-gray-700 dark:text-gray-400">
         <tr>
             <th scope="col" className="px-4 py-3 ">
                 ID
             </th>
             <th scope="col" className="px-6 py-3 ">
                 Name
             </th>
             <th scope="col" className="px-4 py-3 ">
                 Pack size
             </th>
             <th scope="col" className="px-6 py-3">
                 Category
             </th>
             <th scope="col" className="px-4 py-3">
                 MRP
             </th>
             <th scope="col" className="px-4 py-3 flex items-center justify-center">
                 Image
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
            productsList.map(product => (
                <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.id}
                </td>
                <td scope="row" className="flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {product.productName}
                </td>
                <td className="px-4 py-4">
                   {product.packSize}
                </td>
                <td className="px-6 py-4">
                   {product.category}
                </td>
                
                <td className="px-4 py-4">
                   {product.price} 
                </td>
                <td className="px-4 py-4 flex justify-center items-center">
                   <img src={product.image} className='sm:h-6 sm:w-6 h-8 w-8 object-fill' alt="img" />
                </td>
                <td className={`px-4 py-4  ${product.status  ? 'text-green-600' : 'text-red-600'}`}>
                {product?.status ? 'Active' :'Inactive'} 
                </td>
                <td className="hover:cursor-pointer px-2 py-4">
                <FaRegEdit onClick={()=> handleEditProduct(product._id)}/>
   
                </td>
                <td className= "flex justify-center px-full py-4 hover:cursor-pointer">
                    <MdDelete onClick={()=>handleProductDelete(product._id)}/>
   
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

export default Productview