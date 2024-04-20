import React from 'react'
// import LoginForm from '../components/LoginForm';
import { Suspense, lazy } from 'react';
import LinearProgress from '@mui/joy/LinearProgress';


const LoginFormComponent = React.lazy(()=> import('../../components/LoginForm'))


function Login() {
  return (
    <div 
    className='h-screen bg-cover bg-center' 
    style={{ 
      backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/digitalflake-admin-dashboard.appspot.com/o/Login_page-digi.jpg?alt=media&token=469174c3-9fa1-4fcc-9e29-861c1a7981f9')`,
      backgroundColor: 'rgba(214, 295, 255, 0.6)'
    }}
  >
      <Suspense fallback={<LinearProgress  
      color="primary"
  size="md"
  value={40}
  variant="outlined"
  className='mt-80 lg:mt-80 w-52 lg:w-80 ml-12 lg:ml-96 '/>}>
      <LoginFormComponent />
      </Suspense>
    
    
  </div>
  )
}

export default Login