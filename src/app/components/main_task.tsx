 "use client";
    import React, { useState, useEffect } from "react";
    import { getTasks, Task } from "@/app/api/task";
    import LastTasksTable from "@/app/components/task_table";
    
const Maintask: React.FC = () => {
      const [tasks, setTasks] = useState<Task[]>([]);
      const [error, setError] = useState<string>("");
    
      useEffect(() => {
        const fetchTasks = async () => {
          try {
            const fetchedTasks: Task[] = await getTasks();
            setTasks(fetchedTasks);
            setError("");
          } catch (error) {
            setError("Error fetching tasks");
          }
        };
    
        fetchTasks();
      }, []);
    
      return (
        <main className="bg-white">
          <section>
            <div className="">
           
              {error && <div>{error}</div>}
              <LastTasksTable />
            
            </div>
          </section>
        </main>
  )
}

export default Maintask