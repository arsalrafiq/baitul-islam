"use client";
import { useState, useEffect } from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const date = new Date();
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const dayOfMonth = date.getDate();
    setCurrentDate(`${day}, ${dayOfMonth} ${month}`);
  }, []);

  return (
    <nav
      className="fixed top-0 xl:left-60 right-4 h-12 bg-white shadow-md z-10 rounded-lg"
      role="navigation"
    >
      <div className="container mx-auto p-1 flex justify-between items-center">
        <div className="flex items-center ">
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="bg-gray-200 rounded-full py-2 px-4 w-64"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <button className="px-4 py-2 rounded-lg  hover:bg-zinc-100 transition-colors">{currentDate}▼</button>
        <div className="hidden md:block text-lg font-medium"></div>
        <div className="px-2 hidden md:flex items-center bg-gray-200 rounded-full">
          <button className="bg-slate-800 flex space-x-2bg-gray-200 rounded-full py-2 px-4 text-white hover:bg-slate-900">
            <div>Cart </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
          <button onClick={toggleMenu} className="flex items-center">
            
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
          <p>List</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

