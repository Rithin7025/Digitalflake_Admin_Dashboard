import { Sidebar } from "flowbite-react";
import { HiInbox, HiShoppingBag, HiTable } from "react-icons/hi";
import Homepage from "../components/Homepage";
import CategoryView from "../components/CategoryView";
import Productview from "../components/Productview";
import CategoryAdd from "../components/CategoryAdd";
import ProductAdd from "../components/ProductAdd";


export function SidebarComponent() {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <Sidebar className="bg-[#FFFFFF] text-[#000000] pt-10 font-semibold w-32 lg:w-48 flex-shrink-0  mt-2">

        {/* Sidebar Items */}
        <Sidebar.Items >
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiInbox} className="hover:bg-[#FFF8B7] mb-3">
              Home
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag} className="hover:bg-[#FFF8B7]  mb-3">
              Products
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable} className="hover:bg-[#FFF8B7]">
              Category
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      
      {/* Page Content */}
      <div className="flex-1 bg-[#FFFFFF] overflow-hidden sm:overflow-x-auto">
        {/*  page content goes here */}
        {/* <Homepage /> */}
        {/* <CategoryView /> */}
        {/* <Productview /> */}
        {/* <CategoryAdd /> */}
        <ProductAdd />
        
      </div>
    </div>
  );
}

export default SidebarComponent;
