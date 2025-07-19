
import { useState } from 'react';
import Button from '../Button';
import { NavLink } from 'react-router-dom';
import signUp from '../../../config/signup';
import login from '../../../config/login';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [loginForm, setLoginForm] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    checkbox: false
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value, checked, type } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    setErrors({});
    console.log(loginForm);
  };

  const validate = () => {
    const newErrors = {};
    if (!loginForm.fullname.trim()) newErrors.fullname = "Full name is required";
    if (!loginForm.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(loginForm.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!loginForm.password) {
      newErrors.password = "Password is required";
    } else if (loginForm.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (loginForm.confirmPassword !== loginForm.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!loginForm.checkbox) {
      newErrors.checkbox = "You must accept the terms";
    }
    return newErrors;
  };

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Submitted", loginForm);
      alert("Sign up successful (mock)");
    }
    try {
      const response = await signUp(loginForm.email, loginForm.password, loginForm.fullname);
      if(response){
        setMessage("Sign up successful");
        setLoginForm({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
        checkbox: false
      })
      navigate("/login");
      }
      

    } catch (error) {
      console.log(error,"this is the error")
      
    }
  };

  return (
    <div className='py-10'>
      <h1 className='font-semibold md:text-[24px] lg:text-[34px]'>Start Your Investment Journey!</h1>
      <p className='text-sm text-gray'>Sign up on Cosmos and start investing in sustainable farming today</p>
      
      <form onSubmit={onSubmitHandler} className='py-6'>
        {message && <p className="text-green-500 text-sm">{message}</p>}
        <div className='py-2'>
          <label htmlFor="fn">Full Name</label>
          <input onChange={onChangeHandler} name="fullname" type="text" id="fn" placeholder='   full name' className='border w-full py-1 rounded mt-1 border-[#E5E7EB]' />
          {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
        </div>
        <div className='py-2'>
          <label htmlFor="email">Email Address</label>
          <input onChange={onChangeHandler} name="email" type="email" id="email" placeholder='   Email address' className='border w-full py-1 rounded mt-1 border-[#E5E7EB]' />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
       
        <div className='py-2'>
          <label htmlFor="pw">Password</label>
          <input onChange={onChangeHandler} name="password" type="password" id="pw" placeholder='   Password' className='border w-full py-1 rounded mt-1 border-[#E5E7EB]' />
          <p className='text-gray-500 text-sm'>Use 8+ characters with letters, numbers & symbols</p>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <div className='py-2'>
          <label htmlFor="cpw">Confirm Password</label>
          <input onChange={onChangeHandler} name="confirmPassword" type="password" id="cpw" placeholder='   Confirm Password' className='border w-full py-1 rounded mt-1 border-[#E5E7EB]' />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </div>
        <div className='py-2 flex gap-2 items-start'>
          <input onChange={onChangeHandler} type="checkbox" name="checkbox" id="confirm" />
          <p className='text-sm'>
            By creating an account, I agree to the <a className='text-header underline' href="#">Terms of use</a> and <a className='text-header underline' href="#">Privacy Policy</a>
          </p>
        </div>
        {errors.checkbox && <p className="text-red-500 text-sm">{errors.checkbox}</p>}
        <div className='pt-3 pb-1'>
          <Button variant='tertiary' size='lg'>Sign Up</Button>
        </div>
        <p className="py-2 text-base font-normal text-right">
          Already have an account?{' '}
          <NavLink to="/login" className="text-header">Login</NavLink>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;

