import React from 'react'
import Sidebar from '../components/Sidebar'
import Test from '../pages/Test'
import Header from '../components/Header'

function Home() {
  return (
    <div className='h-screen overflow-hidden'>
      <Header />
     <Test />
    </div>
  )
}

export default Home