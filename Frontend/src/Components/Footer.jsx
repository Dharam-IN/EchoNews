import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1B3C73] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <p className="text-gray-300 flex">&copy; {new Date().getFullYear()} <Link to={"https://github.com/dharam-in"} target='_blank' className='flex items-center flex-row gap-1 hover:text-[#D52636] ml-4'><FaGithub/> <span>Dharam</span></Link>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
