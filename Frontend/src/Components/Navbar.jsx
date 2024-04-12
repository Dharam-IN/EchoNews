import React, { useContext, useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { isAuthorizedContext } from '../context/CustomContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const Navbar = () => {
    const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { isAuthorized, setIsAuthorized, user, setUser } = useContext(isAuthorizedContext);

    const handleLogout = async () => {
        try {
            const res = await axios.get(`${BACKEND_URI}/api/v1/user/logout`,{
                withCredentials: true
            });
            console.log(res)
            setIsAuthorized(false);
            setUser({});
        } catch (error) {
            console.log("Error logging out:", error);
        }
    };
    

    return (
        <>
            <nav className='bg-[#1B3C73] px-8 py-3 flex justify-between relative'>
                <div className="flex items-center gap-9">
                    <IoMenu className='text-3xl text-white cursor-pointer lg:hidden' onClick={() => setSidebarOpen(true)} />
                    <div className="text-white">
                        <Link to={"/"}>
                            <img className='w-[80px]' src="/Images/LightLogo.png" alt="Logo" />
                        </Link>
                    </div>
                    <div className="hidden lg:block">
                        <ul className='flex gap-4 text-white'>
                            <li className='text-lg cursor-pointer hover:text-[#D52636]'>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li className='text-lg cursor-pointer hover:text-[#D52636]'>
                                <NavLink to="/">About</NavLink>
                            </li>
                            <li className='text-lg cursor-pointer hover:text-[#D52636]'>
                                <NavLink to="/">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    {
                        isAuthorized ? 
                        <div className="flex gap-4">
                            <button onClick={handleLogout} className={`px-4 py-2 rounded-md bg-[#D52636] text-white font-semibold hover:bg-[#d52634ce] focus:outline-none focus:bg-[#D52636]`}>Logout</button>
                            {/* <div className='bg-white w-5 h-full'>
                                <h4>{user.name.charAt(0)}</h4>
                            </div> */}
                        </div>
                        :
                        <div className="flex gap-4">
                            <Link to={"/login"} className={`px-4 py-2 rounded-md bg-[#D52636] text-white font-semibold hover:bg-[#d52634ce] focus:outline-none focus:bg-[#D52636]`}>Login</Link>
                            <Link to={"/signup"} className={`px-4 py-2 rounded-md bg-[#D52636] text-white font-semibold hover:bg-[#d52634ce] focus:outline-none focus:bg-[#D52636]`}>Signup</Link>
                        </div>
                    }
                </div>
            </nav>

            {/* Sidebar Menu */}
            <div className={`fixed lg:hidden top-0 w-full h-full bg-[#0000004b] z-50 left-[-100% !important] ${sidebarOpen ? "left-[0]" : "left-[-100%]"}`}>
                <div className={`w-[250px] h-full p-8 bg-white transition-transform duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <IoMdClose className='text-2xl cursor-pointer mb-5' onClick={() => setSidebarOpen(false)} />
                    <div>
                        <ul className='flex gap-4 text-white flex-col'>
                            <li className='text-lg cursor-pointer bg-[#6587b7] text-white mb-3 p-2 w-full rounded-xl hover:bg-[#40679E]'>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li className='text-lg cursor-pointer bg-[#6587b7] text-white mb-3 p-2 w-full rounded-xl hover:bg-[#40679E]'>
                                <NavLink to="/">About</NavLink>
                            </li>
                            <li className='text-lg cursor-pointer bg-[#6587b7] text-white mb-3 p-2 w-full rounded-xl hover:bg-[#40679E]'>
                                <NavLink to="/">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
