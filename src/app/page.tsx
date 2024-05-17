import React from "react";
import Main_Task from "@/app/components/main_task";
import Navbar from "./components/nav";
import Productivty from "./components/productivty";
import ProjectsInProgress from "./components/projects";

const Home = () => {
  return (
    <main className="mx-auto flex flex-col sm:flex-wrap ">
      <div className="flex flex-col w-full">
        <div className="flex">
          <Navbar />
        </div>
        <div className="flex-1">
          <Main_Task />
        </div>
      </div>
      <section className="w-full flex flex-col md:flex-row rounded-full h-[40vh]">
        <div className="flex-1">
          <Productivty />
        </div>
        <div className="flex-1">
          <ProjectsInProgress />
        </div>
      </section>
    </main>
  );
};

export default Home;
