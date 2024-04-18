import React from 'react'
// import LoginForm from '../components/LoginForm';
import { Suspense, lazy } from 'react';

const LoginFormComponent = React.lazy(()=> import('../components/LoginForm'))


function Login() {
  return (
    <div 
    className='h-screen bg-cover bg-center' 
    style={{ 
      backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/digitalflake-admin-dashboard.appspot.com/o/Login_page-digi.jpg?alt=media&token=469174c3-9fa1-4fcc-9e29-861c1a7981f9')`,
      backgroundColor: 'rgba(214, 295, 255, 0.6)'
    }}
  >
      <Suspense fallback={<div> Loading ...</div>}>
      <LoginFormComponent />
      </Suspense>
    
    
  </div>
  )
}

export default Login