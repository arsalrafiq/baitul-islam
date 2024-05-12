// tasks.tsx
import Image from "next/image";
interface Task {
  id: number;
  name: string;
  admin: {
    name: string;
    avatar: string;
  };
  members: string[];
  status: "done" | "inProgress";
  runtime: string;
  finishDate: string;
}

const tasks: Task[] = [
  {
    id: 1,
    name: "Project",
    admin: {
      name: "Arsalan",
      avatar: "/hero.jpeg",
    },
    members: ["Danish"],
    status: "inProgress",
    runtime: "6 hours",
    finishDate: "6 Mon",
  },
  {
    id: 2,
    name: "Meeting",
    admin: {
      name: "Imran",
      avatar: "/hero.jpeg",
    },
    members: ["Zain"],
    status: "done",
    runtime: "2 hours",
    finishDate: "7 Tue",
  },
]
const TasksTable = () => {
  return (
    <div className="flex flex-wrap xl:pl-60">
      <div className="w-full mt-20">
        <h2 className="text-lg font-bold">Last Tasks</h2>
        <div className="flex justify-between pr-8">
          <p className="">Total Tasks({tasks.length})</p>
          <span>
            Done: {tasks.filter((task) => task.status === "done").length}
          </span>
          <span>
            In progress:{" "}
            {tasks.filter((task) => task.status === "inProgress").length}
          </span>
        </div>
        <div className="w-full lg:w-1/2 xl:w-2/3 p-2">
          <table className="w-full table-auto border-gray-300 border-r">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border-gray-300 border-r">
                  <input type="checkbox" />
                </th>
                <th className="px-8 py-2 border-gray-300 border-r">Name</th>
                <th className="px-8 py-2 border-gray-300 border-r">
                  <span>Admin</span>
                </th>
                <th className="px-16 py-2 border-gray-300 border-r">Members</th>
                <th className="px-16 py-2 border-gray-300 border-r">
                  <span>Status</span>
                  <i className="fas fa-clock text-gray-500 ml-2" />
                </th>
                <th className="px-16 py-2 border-gray-300 border-r">Runtime</th>
                <th className="px-12 py-2 border-gray-300 border-r">FinishDate</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id} className="bg-white">
                  <td className="px-4 py-2 border-gray-300 border-r">
                    <input type="checkbox" />
                  </td>
                  <td className="px-8 py-2 border-gray-300 border-r">{task.name}</td>
                  <td className="px-8 flex py-2 border-gray-300 border-r">
                    <Image
                      src={task.admin.avatar}
                      width={20}
                      height={20}
                      alt={task.admin.name}
                      className="mr-2"
                    />
                    <span>{task.admin.name}</span>
                  </td>
                  <td className="px-16 py-2 border-gray-300 border-r">{task.members.join(", ")}</td>
                  <td className="px-16 py-2 border-gray-300 border-r">
                    {task.status === "done" ? (
                      <span className="text-green-500">Done</span>
                    ) : (
                      <span className="text-orange-500">In progress</span>
                    )}
                    <i className="fas fa-clock text-gray-500 ml-2" />
                  </td>
                  <td className="px-16 py-2 border-gray-300 border-r">{task.runtime}</td>
                  <td className="px-16 py-2 border-gray-300 border-r">{task.finishDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TasksTable;

