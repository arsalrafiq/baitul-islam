import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";

interface Task {
  name: string;
  admin: string;
  adminAvatar: string;
  members: number;
  status: "inProgress" | "done";
  runtime: string;
  finishDate: string;
}

const tasks: Task[] = [
  {
    name: "ClientOnboarding - Circle",
    admin: "Samantha J.",
    adminAvatar: "/hero3.png",
    members: 3,
    status: "inProgress",
    runtime: "6 hours",
    finishDate: "6 Mon",
  },
  {
    name: "Meeting with Webflow & Notion",
    admin: "Bob P.",
    adminAvatar: "/hero3.png",
    members: 4,
    status: "done",
    runtime: "2 hours",
    finishDate: "7 Tue",
  },
  {
    name: "First Handoff with Engineers",
    admin: "Kate O.",
    adminAvatar: "/hero3.png",
    members: 10,
    status: "inProgress",
    runtime: "3 days",
    finishDate: "10 Fri",
  },
  {
    name: "Client Drafting (2) with Lawrence",
    admin: "Jack F.",
    adminAvatar: "/hero3.png",
    members: 7,
    status: "inProgress",
    runtime: "1 week",
    finishDate: "19 Sun",
  },
];

const LastTasks: React.FC = () => {
  const totalTasks = tasks.length;
  const doneTasks = tasks.filter((task) => task.status === "done").length;
  const inProgressTasks = tasks.filter(
    (task) => task.status === "inProgress"
  ).length;

  return (
    <div className="mt-12 p-2">
      <h1 className=" text-2xl font-semibold">Last tasks</h1>
      <div className="flex justify-between pl-2">
        <p>Total Tasks ({totalTasks})</p>
        <div className="">
          <span className="mr-8">Done: {doneTasks}</span>
          
          <span>In progress: {inProgressTasks}</span>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-8 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <input type="checkbox" />
              </th>
              <th
                scope="col"
                className="px-8 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-8 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Admin
              </th>
              <th
                scope="col"
                className="px-8 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Members
              </th>
              <th
                scope="col"
                className="px-8 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-8 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Run time
              </th>
              <th
                scope="col"
                className="px-8 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Finish date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {tasks.map((task, index) => (
              <tr key={index}>
                <td className="px-8 py-2 whitespace-nowrap">
                  <input type="checkbox" />
                </td>
                <td className="px-8 py-2 whitespace-nowrap">{task.name}</td>
                <td className="px-8 py-2 whitespace-nowrap flex items-center">
                  <img
                    className="h-6 w-6 rounded-full mr-2"
                    src={task.adminAvatar}
                    alt={task.admin}
                  />
                  {task.admin}
                </td>
                <td className="px-6 py-2 whitespace-nowrap">{task.members}</td>
                <td className="px-6 py-2 whitespace-nowrap flex">
                <MdOutlineWatchLater />
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      task.status === "done"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {task.status}
                  </span>
                </td>
                <td className="px-6 py-2 whitespace-nowrap">{task.runtime}</td>
                <td className="px-6 py-2 whitespace-nowrap">
                  {task.finishDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LastTasks;
