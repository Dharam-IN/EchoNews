import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const NewsCard = ({ postimageurl, posttitle, postdesc }) => {
  const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;

  // Function to truncate text to a specified length
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  };

  return (
    <>
      <div className="bg-[#1B3C73] border border-gray-200 rounded-lg shadow">
        
          <img
            className="rounded-t-lg h-[300px] object-cover w-full"
            src={`${BACKEND_URI}/uploads/${postimageurl}`}
            alt="news card"
          />
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {truncateText(posttitle, 20)}
            </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {truncateText(postdesc, 100)}
          </p>
          <Link
            to="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span className="pr-1">Read more</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
