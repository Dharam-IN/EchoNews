import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Signup = () => {
  const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;

  const [showPassword, setShowPassword] = useState(false);

  const [userData, setUserData] = useState({
    role: "",
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const UserDetailsAdd = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const SubmitDataBTN = async (e) => {
    e.preventDefault();
    const { role, name, email, phone, password } = userData;
    if (!role || !name || !email || !phone || !password) {
      return toast.error('Please Fill all Fields');
    }

    try {
      const res = await axios.post(`${BACKEND_URI}/api/v1/user/register`, {
        role,
        name,
        email,
        phone,
        password
      });
      console.log(res)
      toast.success(res.data.message);
      if (res.status === 201) {
        setUserData({
          role: "",
          name: "",
          email: "",
          phone: "",
          password: ""
        });
      }
    } catch (error) {
      console.log(error.response)
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-[85vh] bg-gray-100 px-5 md:py-0 py-10">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-1/2 w-full" onSubmit={SubmitDataBTN}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Select Your Role</label>
            <select name="role" value={userData.role} onChange={UserDetailsAdd} className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight">
              <option value="null">Select Your Role</option>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input id="name" name='name' value={userData.name} onChange={UserDetailsAdd} type="text" placeholder="Enter your Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input id="email" name='email' value={userData.email} onChange={UserDetailsAdd} type="email" placeholder="Enter your email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
            <input id="phone" name='phone' value={userData.phone} onChange={UserDetailsAdd} type="tel" placeholder="Enter your phone number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <div className="relative">
              <input id="password" name='password' value={userData.password} onChange={UserDetailsAdd} type={showPassword ? "text" : "password"} placeholder="Enter your password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <div className='absolute top-[50%] right-3 cursor-pointer translate-y-[-50%]' onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
          </div>

          <h6 className='mt-5'>Already Have an <Link to={"/login"} className='text-[#3b82f6]'>Account</Link></h6>
        </form>
      </div>
      <Toaster />
    </>
  );
};

export default Signup;
