// import React from "react";
// import Main_Task from "@/app/components/main_task";
// import Navbar from "./components/nav";
// import MenuBar from "./components/menu";
// import Productivty from "./components/productivty";
// import ProjectsInProgress from "./components/projects";

// const Home = () => {
//   return (
//     <div>
//       <Navbar />
//       <MenuBar />

//       <Main_Task />

//       <Productivty />

//       <ProjectsInProgress />
//     </div>
//   );
// };
// export default Home;

import React from "react";
import Main_Task from "@/app/components/main_task";
import Navbar from "./components/nav";
import Productivty from "./components/productivty";
import ProjectsInProgress from "./components/projects";

const Home = () => {
  return (
    <main>
      <Navbar />

      <Main_Task />
      <section className="flex flex-col md:flex-row rounded-full h-[40vh]">
        <Productivty />

        <ProjectsInProgress />
      </section>
    </main>
  );
};

export default Home;
