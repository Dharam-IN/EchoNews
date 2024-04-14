import React from 'react'
import {Link} from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

const NewsCard = () => {
  return (
    <>
        <div className="max-w-sm bg-[#1B3C73] border border-gray-200 rounded-lg shadow">
            <Link to="#">
                <img className="rounded-t-lg" src="/Images/slider3.jpg" alt="news card" />
            </Link>
            <div className="p-5">
                <Link to="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <Link to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <span className='pr-1'>Read more</span>
                    <FaArrowRight/>
                </Link>
            </div>
        </div>
    </>
  )
}

export default NewsCard