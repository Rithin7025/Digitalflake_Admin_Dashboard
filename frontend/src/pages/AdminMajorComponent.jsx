import React, {lazy,Suspense} from 'react'
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
const AdminHome = React.lazy(()=> import("../components/Homepage"))

export function SidebarComponent() {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <Sidebar className="bg-[#FFFFFF] text-[#000000] pt-10 font-semibold w-32 lg:w-48 flex-shrink-0  mt-2">
        {/* Sidebar Items */}
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="#"
              icon={HiInbox}
              className="hover:bg-[#FFF8B7] mb-3"
            >
              Home
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiShoppingBag}
              className="hover:bg-[#FFF8B7]  mb-3"
            >
              Products
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiTable}
              className="hover:bg-[#FFF8B7]"
            >
              Category
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      {/* Page Content */}
      <div className="flex-1 bg-[#FFFFFF] overflow-hidden sm:overflow-x-auto">
        {/*  page content goes here */}
        <Suspense fallback={   <LinearProgress
  color="primary"
  size="md"
  value={40}
  variant="outlined"
  className='mt-80 lg:mt-80 w-52 lg:w-80 ml-12 lg:ml-96'
/>}>


        {/* <AdminHome /> */}
        {/* <CategoryView /> */}
        {/* <Productview /> */}
        {/* <CategoryAdd /> */}
        {/* <ProductAdd /> */}
        {/* <ProductEdit /> */}
        {/* <CategoryEdit /> */}
</Suspense>
     
      </div>
    </div>
  );
}

export default SidebarComponent;
