"use client";
import React, { useState } from "react";
import { LiaCommentSolid } from "react-icons/lia";
import {ChevronRightIcon } from "@heroicons/react/24/solid";
import { PiFilesLight } from "react-icons/pi";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  date: string;
  labels: string[];
  members: string[];
  comments: number;
  files: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Improve cards readability",
    date: "21.03.22",
    labels: ["Feedback", "Bug", "Design System"],
    members: [
      "/hero3.png",
      "/hero2.jpg",
      "/hero.jpeg",
    ],
    comments: 12,
    files: 0,
  },
  {
    id: 2,
    title: "Refactor user authentication",
    date: "25.03.22",
    labels: ["Feature", "Security"],
    members: ["/path/to/avatar4.png", "/path/to/avatar5.png"],
    comments: 8,
    files: 2,
  },
  {
    id: 3,
    title: "Redesign dashboard",
    date: "28.03.22",
    labels: ["UI", "UX"],
    members: [
      "/hero3.png",
      "/hero2.jpg",
      "/hero.jpeg",
      "/path/to/avatar9.png",
    ],
    comments: 15,
    files: 3,
  },
];

const ProjectsInProgress: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const handleNextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const project = projects[currentProject];

  return (
    // <div className="w-[90vh] h-[30vh] p-2">
    <div className="w-full sm:w-[90vh] h-[30vh] p-2">
      <div className="relative bg-gray-800 p-4 rounded-lg shadow-lg text-white">
        <h1 className="text-2xl font-semibold mb-4">Projects in progress:</h1>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          <button
            className="bg-gray-200 px-2 py-2 rounded-full"
            onClick={handleNextProject}
          >
            <ChevronRightIcon className="h-4 w-4 text-gray-800" />
          </button>
        </div>
        <div className="flex space-x-4">
          <div className="flex-shrink-0 w-96 bg-white text-black p-4 rounded-lg h-64">
            <div className="flex space-x-2 mb-2">
              {project.labels.map((label, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                >
                  {label}
                </span>
              ))}
            </div>
            <h2 className="flex mt-12 text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-500">{project.date}</p>
 <div className="flex justify-between mt-20 items-center">
  <div className="flex ">
    {project.members.map((member, index) => (
      <Image
        key={index}
        className="h-6 w-6 rounded-full border-2 border-white -ml-1"
        src={member}
        alt="Member avatar"
        width={24}
        height={24}
      />
    ))}
  </div>
  <div className="flex items-center text-sm text-gray-600">
    <span className="mr-4 flex">
      <i className="material-icons text-base align-middle mr-1">
        <LiaCommentSolid />
      </i>
      {project.comments} comments
    </span>
    <span className="flex">
      <i className="material-icons text-base align-middle mr-1">
        <PiFilesLight />
      </i>
      {project.files} files
    </span>
  </div>
</div>
          <div className="flex-grow flex items-center justify-center">
            {/* Placeholder for other project cards */}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProjectsInProgress;
