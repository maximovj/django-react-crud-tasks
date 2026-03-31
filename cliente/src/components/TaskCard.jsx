import { useNavigate } from "react-router-dom";

export const TaskCard = (props) => {
  const { task } = props;

  const navigate = useNavigate();

  const showTask = () => {
    navigate(`/tasks/${task.id}`);
  };

  return (
    <div
      className="grid grid-cols-1 gap-2 bg-zinc-800 p-3 hover:bg-zinc-700 cursor-pointer rounded-lg"
      onClick={showTask}
    >
      {/* Contenido */}
      <h3 className=" py-2 px-3 text-white">{task.title}</h3>
      <p className=" bg-slate-400 opacity-50 py-2 px-3 text-white rounded-lg min-h-48">
        {task.description}
      </p>
    </div>
  );
};
