"use client"
import React from "react";
import Maintask from "./main_task";
import Navbar from "./nav";
import MenuBar from "./menu";
import Productivity from "./productivty";
import Projects from "./projects";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      {/* Hide MenuBar on small and medium screens */}
      <div className="hidden sm:block md:block">
        <MenuBar />
      </div>
      <Maintask />
      <div className="flex flex-col md:flex-row md:items-stretch md:justify-between md:mx-2 lg:mx-4 mt-2">
        <div className="md:w-1/5 lg:rounded-xl overflow-hidden mt-2 md:mt-0"></div>
        <div className="md:w-1/2 lg:rounded-xl overflow-hidden md:mr-2 mt-4 md:mt-0">
          <Productivity />
        </div>
        <div className="md:w-1/2 lg:rounded-xl overflow-hidden mt-4 md:mt-0">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



