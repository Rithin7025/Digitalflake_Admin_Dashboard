import React, { useState } from 'react';
import { HiUserCircle } from 'react-icons/hi'; // Import the person logo icon
import { Popover } from '@headlessui/react'; // Import the Popover component from Headless UI
import { logout } from '../../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false); // State to manage the visibility of the popover

  const navigate = useNavigate();
  const handleLogout = async() => {
    try {
      const res = await axios.post('/api/admin/auth/logout');
      //dispatching an action to clear the currenUser in redux store
      dispatch(logout());
      //deleting the access_token from client side 
      document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      navigate('/login')

    } catch (error) {
      console.log(error,'logout failed')
    }
  }
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          {/* Button with person logo */}
          <Popover.Button className=" space-x-4">
            <HiUserCircle className="w-full h-8 lg:mr-5 text-white hover:text-black outline-none border-none" />
           
          </Popover.Button>

          {/* Logout Popover */}
          <Popover.Panel className="absolute z-10  bg-white hover:bg-red-600  rounded-lg right-0 w-48 mt-4">
            <button onClick={handleLogout} className="block w-full text-center font-semibold border hover:text-white shadow-lg rounded-lg border-red-600 text-red-600 px-4 py-2 focus:outline-none">
              Logout
            </button>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}

export default LogoutButton;
