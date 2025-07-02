// import React from 'react'
// import { NavLink, useNavigate} from 'react-router-dom'
// import Button from '../Button'


// const LoginForm = () => {
//     const navigate = useNavigate()

//     const onSubmitHandler = (e) => {
//       e.preventDefault();
//       navigate("/adminSidebar");
//     }

//     const nextForget = ()=> {
//         navigate('/forgotpassword')
//     }
//   return (
//     <div className='px-8 md:px-0 pb-8 md:pb-0'>
//         <h1 className='font-semibold font-sanns py-6 md:py-0 text-header md:text-[24px] lg:text-[34px]'>Welcome Back!</h1>
//         <p className='font-interr text-sm font-normal'>
//         Sign in to unlock Investment opportunities
//         </p>
//         <form onSubmit={onSubmitHandler}>
//         <div className='py-2'>
//             <label className='font-normal text-base' htmlFor="email">Email Address</label>
//             <input className='border-[1px] w-full py-1 rounded mt-1 border-[#E5E7EB]'  type="email" name="email" id="email" placeholder='   Email address' />
//         </div>
//         <div className='py-2'>
//             <label className='font-normal text-base' htmlFor="pw">PassWord</label>
//             <input className='border-[1px] w-full py-1 rounded mt-1 border-[#E5E7EB]'  type="password" name="pw" id="pw" placeholder='   Password' />
//             <p className='text-[#E5E7EB] text-sm font-normal'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
//         </div>
//         <div className='flex justify-between'>
//             <div className='flex gap-2 items-center'>
//             <input type="checkbox" name="remember" id="remember" />
//             <p>Remember me</p>
//             </div>
//            <div onClick={nextForget}>
//            <NavLink to="/forgotpassword">
//                 Forgot Password?
//             </NavLink>
//            </div>
//         </div>
//         <div className='py-6'><Button variant='tertiary' size='lg'>Sign In</Button></div>
//         <div>
//         <p className="py-2  text-base font-normal text-right">
//           Don&apos;t have an account?{' '}
//           <NavLink to="/signup" className="text-header">
//             Sign up
//           </NavLink>
//         </p>
//         </div>
//         </form>
      
//     </div>
//   )
// }

// export default LoginForm



import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../Button';

const LoginForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors({});
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }
    return newErrors;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Login success", form);
      navigate("/adminSidebar");
    }
  };

  return (
    <div className='px-8 md:px-0 pb-8 md:pb-0'>
      <h1 className='font-semibold py-6 text-header md:text-[24px] lg:text-[34px]'>Welcome Back!</h1>
      <p className='text-sm font-normal'>Sign in to unlock Investment opportunities</p>
      <form onSubmit={onSubmitHandler}>
        <div className='py-2'>
          <label htmlFor="email">Email Address</label>
          <input onChange={onChangeHandler} name="email" type="email" placeholder='Email address' className='border w-full py-1 rounded mt-1 border-[#E5E7EB]' />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className='py-2'>
          <label htmlFor="pw">Password</label>
          <input onChange={onChangeHandler} name="password" type="password" placeholder='Password' className='border w-full py-1 rounded mt-1 border-[#E5E7EB]' />
          <p className='text-gray-500 text-sm'>Use 8+ characters with letters, numbers & symbols</p>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <input type="checkbox" name="remember" />
            <p className="text-sm">Remember me</p>
          </div>
          <NavLink to="/forgotpassword" className="text-sm text-blue-500">Forgot Password?</NavLink>
        </div>
        <div className='py-6'>
          <Button variant='tertiary' size='lg'>Sign In</Button>
        </div>
        <p className="py-2 text-base font-normal text-right">
          Don&apos;t have an account? <NavLink to="/signup" className="text-header">Sign up</NavLink>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

