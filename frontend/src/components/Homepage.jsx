import React from 'react'

function Homepage() {
  return (
    <div className='flex justify-center items-center h-2/3 flex-col gap-4' >

        <img className='h-20 w-42 ' src="https://firebasestorage.googleapis.com/v0/b/digitalflake-admin-dashboard.appspot.com/o/digitalflake_cropped.png?alt=media&token=dfcf7e68-57f4-4aef-b899-fcef8a44e044" alt="" />
        <p className='text-3xl '><span className='font-bold '>digital</span>flake</p>
        <p className='text-xl '>welcome to digital flake Admin</p>
    </div>
  )
}

export default Homepage