import React from 'react'
import { IoIosCart } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function Productview() {
  return (
    <div className='p-5 flex flex-col mt-10'>
    <div className='h-10 w-full mb-3 flex items-center justify-between '>
     {/*category*/}
         <div className='hidden lg:flex items-center px-2 gap-2'>
         <IoIosCart />
         <p className='font-semibold sm:text-sm'>Products</p>
         </div>
     {/*Search*/}
         <div>
         <input type="text" name="" id=""  className='lg:w-96 lg:h-9 md:w-52 w-32 outline-none  border-2 rounded-lg' />

         </div>
     {/*Add*/}
         <div>
         <button className='w-16 h-7 text-xs lg:p-2 lg:w-40 lg:h-9 lg:text-sm text-white font-semibold rounded-lg hover:bg-purple-800 bg-[#662671]'> Add New</button>
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
         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <td scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 123
             </td>
             <td scope="row" className="flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Milk
             </td>
             <td className="px-4 py-4">
                500 ml
             </td>
             <td className="px-6 py-4">
                Accessories
             </td>
             
             <td className="px-4 py-4">
                500 
             </td>
             <td className="px-4 py-4 flex justify-center items-center">
                <img src="https://firebasestorage.googleapis.com/v0/b/digitalflake-admin-dashboard.appspot.com/o/digitalflake_cropped.png?alt=media&token=dfcf7e68-57f4-4aef-b899-fcef8a44e044" className='sm:h-6 sm:w-6 h-8 w-8 object-fill' alt="" />
             </td>
             <td className="px-4 py-4 ">
                <p className='text-red-600 font-medium'> Inactive</p>
             </td>
             <td className="hover:cursor-pointer px-2 py-4">
             <FaRegEdit />

             </td>
             <td className= "flex justify-center px-full py-4 hover:cursor-pointer">
                 <MdDelete />

             </td>
         </tr>
        
     </tbody>
 </table>
</div>

 </div>
  )
}

export default Productview