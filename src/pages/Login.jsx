import React from 'react'
import LoginForm from '../components/login/LoginForm'
import ForgotPassword from '../components/login/ForgotPassword'
import { useState } from 'react'

const Login = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const nextSlide = ()=> {
    setCurrentSlide((currentSlide) => (currentSlide + 1));
  
  }
  return (
    <div className='md:flex gap-4 h-screen'>
      {/* Left Side - Image */}
      <div className='h-full md:w-1/2'>
        <img
          className='h-full object-cover'
          src="https://media.istockphoto.com/id/1161948459/photo/ethiopia-agricultural-land-near-the-blue-nile.jpg?s=612x612&w=0&k=20&c=Qw5LlKbzoltuhJtLafJnzBhxCZH6DO2NOQFsPyHbTKc="
          alt="signimage"
        />
      </div>
      
      {/* Right Side - Form */}
      <div className='md:w-1/2 flex justify-center items-center'>
        {currentSlide === 1 && <LoginForm />}
        
      </div>
    </div>
  )
}

export default Login
