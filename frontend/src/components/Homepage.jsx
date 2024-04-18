import React from 'react'

function Homepage() {
  return (
    <div className='flex lg:justify-center items-center lg:h-2/3 md:mt-10 flex-col gap-2' >

        <img className='h-10 w-42 mt-20 md:h-8    lg:h-16 w-auto' src="https://firebasestorage.googleapis.com/v0/b/digitalflake-admin-dashboard.appspot.com/o/digitalflake_cropped.png?alt=media&token=dfcf7e68-57f4-4aef-b899-fcef8a44e044" alt="" />
        <p className='text-xl md:text-3xl lg:text-4xl'><span className='font-bold '>digital</span>flake</p>
        <p className='text-sm md:text-xl lg:mt-6 lg:text-xl'>welcome to digital flake Admin</p>
    </div>
  )
}

export default Homepage