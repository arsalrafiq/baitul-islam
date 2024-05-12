// ProjectInProgress.tsx
import Image from "next/image";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface Customer {
  name: string;
  image: string;
}

interface Project {
  name: string;
  feedback: string;
  blog: string;
  systemDesign: string;
  customers: Customer[];
  totalCustomers: number;
  avatar:string;
  description:string
}

const projects: Project[] = [
  {
    name: "Project 1",
    feedback: "/feedback",
    blog: "/blog",
    systemDesign: "/system-design",
    customers: [
      // { name: 'John Doe', image: '/hero.jpeg' },
      // { name: 'Jane Doe', image: '/hero.jpeg' },
      // { name: 'Bob Smith', image: '/hero.jpeg' },
    ],
    totalCustomers: 123,
    avatar: '/hero.jpeg',
    description:`ABC Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit
    velit, aliquet eget nisl id, volutpat tempor nisl.`
  },
  {
    name: "Project 2",
    feedback: "/feedback",
    blog: "/blog",
    systemDesign: "/system-design",
    customers: [
      // { name: 'Alice Johnson', image: '/hero.jpeg' },
      // { name: 'Charlie Brown', image: '/hero.jpeg' },
      // { name: 'David Lee', image: '/hero.jpeg' },
    ],
    totalCustomers: 456,
     
      avatar: '/hero3.png',
      description:`XYZ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit
      velit, aliquet eget nisl id, volutpat tempor nisl.`

  },
];

const ProjectInProgress = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const handlePrevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProjectData = projects[currentProject];

  return (
    <div className="bg-slate-800">
      <div className="p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold text-white">Project in Progress</h2>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Feedback
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Blog
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded">
              System Design
            </button>
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="flex-shrink-0">
            <div className="flex flex-col space-y-4">
              {currentProjectData.customers.map((customer) => (
                <div
                  key={customer.name}
                  className="flex items-center space-x-2"
                >
                  <Image
                    src={customer.image}
                    width={40}
                    height={40}
                    alt={customer.name}
                  />
                  <p className="text-white">{customer.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">
                {currentProjectData.name}
              </h3>
              <div className="flex space-x-4">
                <button
                  className="bg-gray-200 px-4 py-2 rounded-full"
                  onClick={handlePrevProject}
                >
                  <ChevronLeftIcon className="h-4 w-4 text-gray-800" />
                </button>
                <button
                  className="bg-gray-200 px-4 py-2 rounded-full"
                  onClick={handleNextProject}
                >
                  <ChevronRightIcon className="h-4 w-4 text-gray-800" />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2 rounded-full">
                <Image
                  src={currentProjectData.avatar}
                  width={20}
                  height={20}
                  alt="project"
                />
                <p className="text-white">
                  {currentProjectData.totalCustomers}
                </p>
              </div>
            </div> <div className="flex ">
            <p className="text-white">
             {currentProjectData.description}
            </p>
           
                <Image
                    src={currentProjectData.avatar}
                  width={150}
                  height={150}
                  alt="Customer icon"
                />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInProgress;
