import React, {lazy,Suspense,useState} from 'react'
import { Sidebar } from "flowbite-react";
import { HiInbox, HiShoppingBag, HiTable } from "react-icons/hi";
import LinearProgress from '@mui/joy/LinearProgress';


import CategoryView from "../components/Category/CategoryView";
import Productview from "../components/Product/Productview";
import CategoryAdd from "../components/Category/CategoryAdd";
import ProductAdd from "../components/Product/ProductAdd";
import ProductEdit from "../components/Product/ProductEdit";
import CategoryEdit from "../components/Category/CategoryEdit";
import LinearProgressCountUp from '../components/fallbackUI/LinearProgressCountUp';
import Product from '../../../backend/models/product.model';
const AdminHome = React.lazy(()=> import("../components/Homepage"))


export function SidebarComponent() {
  //state to manage the selected item sidebar 
  const [seletectedItem, setSeletectedItem] = useState('home');
  //states that determine to show wheather the add category/product or view category/product
  

  //function to set the isAdd category/product (passing the function as props to the category/product view)
  const handleAddNewCategory = (isAddCategory='category',id)=> {
    setSeletectedItem(isAddCategory)
    if(id && seletectedItem == 'categoryEdit'){
      console.log(id)

    }
  }

  const handleAddNewProduct = (isAddProduct='products',id) => {
    setSeletectedItem(isAddProduct)
  }

  // Function to handle sidebar item click
  const handleItemClick = (itemName) => {
    setSeletectedItem(itemName);
   
  }
  //function to render selected component based on the selected sidebar 
  const renderSelectedItem = () => {
    switch(seletectedItem){
      case 'home' : 
      return <AdminHome />
      case 'products' :
      return  <Productview handleAddNewProduct={handleAddNewProduct}/> 
      case 'productAdd': 
      return <ProductAdd handleAddNewProduct={handleAddNewProduct}/> 
      case 'category' : 
      return <CategoryView handleAddNewCategory={handleAddNewCategory}/>
      case 'categoryAdd' : 
      return <CategoryAdd handleAddNewCategory={handleAddNewCategory}/> 
      case 'categoryEdit' :
      return <CategoryEdit handleAddNewCategory={handleAddNewCategory}/>
      default : 
      return null 

    }
  } 

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <Sidebar className="bg-[#FFFFFF] text-[#000000] pt-10 font-semibold w-32 lg:w-48 flex-shrink-0  mt-2">
        {/* Sidebar Items */}
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              icon={HiInbox}
              onClick={()=> handleItemClick('home')}
              className="hover:bg-[#FFF8B7] mb-3"
            >
              Home
            </Sidebar.Item>
            <Sidebar.Item
              icon={HiShoppingBag}
              className="hover:bg-[#FFF8B7]  mb-3"
              onClick={() => handleItemClick('products')}
            >
              Products
            </Sidebar.Item>
            <Sidebar.Item
              icon={HiTable}
              className="hover:bg-[#FFF8B7]"
              onClick={() => handleItemClick('category')}
            >
              Category
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      {/* Page Content */}
      <div className="flex-1 bg-[#FFFFFF] overflow-x-auto">
        {/*  page content goes here */}
        <Suspense fallback={   <LinearProgress
  color="primary"
  size="md"
  value={40}
  variant="outlined"
  className='mt-80 lg:mt-80 w-52  lg:w-80 ml-12 lg:ml-96 '
/>}>


        
        {renderSelectedItem()}
        {/* <ProductEdit /> */}
        {/* <CategoryEdit /> */}
</Suspense>
     
      </div>
    </div>
  );
}

export default SidebarComponent;
