import { useEffect, useState } from "react";
import { getAllTaks } from "@/api/task.api";
import { TaskCard } from "./TaskCard";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Petición al BackEnd
    const loadTask = async () => {
      const { data } = await getAllTaks();
      setTasks(data);
    };

    loadTask();
    console.log("Página cargada");
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
