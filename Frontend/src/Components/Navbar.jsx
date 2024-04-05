
import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const menus = [
        {
            label: "Home",
            link: "/"
        },
        {
            label: "About",
            link: "/about"
        },
        {
            label: "Services",
            link: "/service"
        },
        {
            label: "Pages",
            link: "/pages"
        },
        {
            label: "Blog",
            link: "/blog"
        },
        {
            label: "Contact",
            link: "/contact"
        },
    ];

    return (
        <>
            <nav className='bg-[#1B3C73] px-8 py-3 flex justify-between relative'>
                <div className="flex items-center gap-9">
                    <IoMenu className='text-3xl text-white cursor-pointer lg:hidden' onClick={() => setSidebarOpen(true)} />
                    <div className="text-white">
                        {/* <h3 className='text-2xl font-bold'>Dha<span className='text-[#F31559]'>ram</span></h3> */}
                        <img className='w-[80px]' src="/Images/LightLogo.png" alt="Logo" />
                    </div>
                    <div className="hidden lg:block">
                        <ul className='flex gap-4 text-white'>
                        {
                            menus.map((lab, index)=>{
                                return <li key={index} className='text-lg cursor-pointer hover:text-[#D52636]'>
                                    <NavLink to={lab.link}>{lab.label}</NavLink>
                                </li>
                            })
                        }
                        </ul>
                    </div>
                </div>
                <div>
                    {/* <div className="w-12 h-12 cursor-pointer rounded-full overflow-hidden">
                        <img src="https://avatars.githubusercontent.com/u/122605883?v=4" alt="user" />
                    </div> */}
                    <div className="flex gap-4">
                        <button className={`px-4 py-2 rounded-md bg-[#D52636] text-white font-semibold hover:bg-[#d52634ce] focus:outline-none focus:bg-blue-600`}>Login</button>
                        <button className={`px-4 py-2 rounded-md bg-[#D52636] text-white font-semibold hover:bg-[#d52634ce] focus:outline-none focus:bg-blue-600`}>Signup</button>
                    </div>
                </div>
            </nav>

            {/* Sidebar Menu */}
            <div className={`fixed lg:hidden top-0 w-full h-full bg-[#0000004b] left-[-100% !important] ${sidebarOpen ? "left-[0]" : "left-[-100%]"}`}>
                {/* <div className="w-[250px] h-full p-8 bg-white"> */}
                <div className={`w-[250px] h-full p-8 bg-white transition-transform duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <IoMdClose className='text-2xl cursor-pointer mb-5' onClick={() => setSidebarOpen(false)} />
                    <div>
                        {menus.map((menu, index) => (
                            <button key={index} className='block bg-[#6587b7] text-white mb-3 py-2 w-full rounded-xl hover:bg-[#40679E]'>{menu.label}</button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
