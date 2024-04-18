import React, { useState } from 'react';
import { HiUserCircle } from 'react-icons/hi'; // Import the person logo icon
import { Popover } from '@headlessui/react'; // Import the Popover component from Headless UI

function LogoutButton() {
  const [isOpen, setIsOpen] = useState(false); // State to manage the visibility of the popover

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          {/* Button with person logo */}
          <Popover.Button className="flex items-center space-x-4">
            <HiUserCircle className="w-8 h-8 lg:mr-5" />
           
          </Popover.Button>

          {/* Logout Popover */}
          <Popover.Panel className="absolute z-10  bg-white shadow-lg rounded-lg p-2 right-0 w-48">
            <button onClick={() => console.log('Logout clicked')} className="block w-full text-right px-4 py-2 hover:bg-gray-100 focus:outline-none">
              Logout
            </button>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}

export default LogoutButton;
