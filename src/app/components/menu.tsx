"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 shadow-md fixed w-56 top-0 left-0 z-10 flex flex-col justify-between h-[100vh] rounded-lg">
      <div className="p-4">
        <div className='flex'> 
        <Image src="/qdata-logo.png" width={24} height={24} alt="" />
      <span className="text-xl font-bold ml-2">Q-Datasoft</span>
        <button onClick={toggleMenu} className="flex items-center md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-gray-500"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        
        </button>
 </div>
        <ul className={`mt-8 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <div className="border-y"></div>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 rounded-full hover:bg-slate-800 hover:text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-500 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Dashboard
            </a>
          </li>
          {/*...other menu items */}
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 rounded-full hover:bg-slate-800 hover:text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-500 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              Projects
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 rounded-full hover:bg-slate-800 hover:text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-500 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              Task list
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 rounded-full hover:bg-slate-800 hover:text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-500 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Services
            </a>
          </li>
          <li className="mb-2 flex justify-between items-center">
            <a href="#" className="flex items-center p-2 rounded-full hover:bg-slate-800 hover:text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-500 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              Notifications
            </a>
            <button className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200">2</button>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 rounded-full hover:bg-slate-800 hover:text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-500 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              Cart
            </a>
          </li>
        </ul>
      </div>

      <div className="justify-center flex flex-row items-center p-4">
        <div className="items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image src="/hero3.png" width={80} height={80} alt="Avatar" />
          </div>
          <div className="ml-2 flex flex-col">
            <span className="text-sm font-medium">Muhammad Imran</span>
            <span className="text-xs text-gray-500">qdatasoft.com</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
