import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-[85vh] px-5 md:py-0 py-10 bg-gray-100">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  md:w-1/2 w-full">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Select Your Role</label>
          <select name="" id="" className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight">
            <option value="null">Select Your Role</option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input id="email" name='email' type="email" placeholder="Enter your email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <div className="relative">
            <input id="password" name='password' type={showPassword ? "text" : "password"} placeholder="Enter your password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <div className='absolute top-[50%] right-3 cursor-pointer transform -translate-y-1/2' onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Login</button>
        </div>
        <div className="text-center">
          <h6 className='mt-5'>Create New <Link to={"/signup"} className='text-blue-500'>Account</Link></h6>
        </div>
      </form>
    </div>
  );
};

export default Login;
