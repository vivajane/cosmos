import React from 'react'
import Button from '../Button'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const SignUpForm = () => {
  const [loginForm, setLoginForm] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    nin: "",
    chexkbox : false

  })

  const onChangeHandler =(e) => {
    const {name, value, checked, type} = e.target
    setLoginForm((prev) => ({
      ...prev,
      [name] : type === "checkbox" ? checked : value
    }))
    console.log(loginForm)
  }

  const onSubmitHandler =(e) => {
    e.preventDefault()
    console.log(loginForm, 'submitted')
  }
  return (
    <div className='py-10 '>
        <h1 className='font-semibold font-sanns md:text-header md:text-[24px] lg:text-[34px]'>Start Your Investment Journey!</h1>
        <p className='font-interr text-sm font-normal text-gray'>Sign up on Cosmos and start investing in sustainable farming today</p>
        
      <form onSubmit={onSubmitHandler} className='py-6'>
        <div className='py-2'>
            <label className='' htmlFor="fn">Full Name</label>
            <input onChange={onChangeHandler} className='border-[1px] w-full py-1 rounded mt-1 border-[#E5E7EB]' type="text" name="fullname" id="fn" placeholder='   full name' />
        </div>
        <div className='py-2'>
            <label className='font-normal text-base' htmlFor="email">Email Address</label>
            <input onChange={onChangeHandler} className='border-[1px] w-full py-1 rounded mt-1 border-[#E5E7EB]'  type="email" name="email" id="email" placeholder='   Email address' />
        </div>
        <div className='py-2'>
            <label className='font-normal text-base' htmlFor="fn">NIN</label>
            <input onChange={onChangeHandler} className='border-[1px] w-full py-1 rounded mt-1 border-[#E5E7EB]'  type="text" name="nin" id="nin" placeholder='   NIN' />
        </div>
        <div className='py-2'>
            <label className='font-normal text-base' htmlFor="pw">Password</label>
            <input onChange={onChangeHandler} className='border-[1px] w-full py-1 rounded mt-1 border-[#E5E7EB]'  type="text" name="password" id="pw" placeholder='   Password' />
            <p className='text-[#E5E7EB] text-sm font-normal'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
        </div>
        <div className='py-2'>
            <label className='font-normal text-base' htmlFor="cpw">Confirm Password</label>
            <input onChange={onChangeHandler} className='border-[1px] w-full py-1 rounded mt-1 border-[#E5E7EB]'  type="text" name="confirmPassword" id="cpw" placeholder='   Confirm Password' />
        </div>
        <div className='py-2 flex gap-2'>
            <input onChange={onChangeHandler}  type="checkbox" name="confirm" id="confirm" />
            <p>By creating an account, I agree to our <a className='text-header underline' href="#">Terms of use</a> and <a className='text-header underline' href="#">Privacy Policy</a></p>
        </div>
        <div className='pt-3 pb-1'>
        <Button variant='tertiary' size='lg'>Sign Up</Button>
        </div>
        <div>
        <p className="py-2  text-base font-normal text-right">
          Already have an account?{' '}
          <NavLink to="/login" className="text-header" href="login">
            Login
          </NavLink>
        </p>
        </div>

      </form>
    </div>
  )
}

export default SignUpForm
