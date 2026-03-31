import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="grid grid-cols-1 py-3 w-48">
      <Link to="/tasks">
        <h1 className="font-bold text-3xl mb-4 cursor-pointer">Task App</h1>
      </Link>
      <button className="bg-indigo-500 px-3 py-2 rounded-lg cursor-pointer">
        <Link to="/tasks-create">Crear tarea</Link>
      </button>
    </div>
  );
}
