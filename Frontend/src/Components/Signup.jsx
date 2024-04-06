import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {Link} from 'react-router-dom'


const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center min-h-[85vh] bg-gray-100 px-5 md:py-0 py-10">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-1/2 w-full">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Select Your Role</label>
            <select name="" id="" className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                <option value="null">Select Your Role</option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input id="name" name='name' type="text" placeholder="Enter your Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input id="email" name='email' type="email" placeholder="Enter your email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
            <input id="phone" name='phone' type="tel" placeholder="Enter your phone number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <div className="relative">
              <input id="password" name='password' type={showPassword ? "text" : "password"} placeholder="Enter your password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <div className='absolute top-[50%] right-3 cursor-pointer translate-y-[-50%]' onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
          </div>

          <h6 className='mt-5'>Allready Have an <Link to={"/login"} className='text-[#3b82f6]'>Account</Link></h6>
        </form>
      </div>
    </>
  );
};

export default Signup;