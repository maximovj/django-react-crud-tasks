import { useNavigate } from "react-router-dom";

export const TaskCard = (props) => {
  const { task } = props;

  const navigate = useNavigate();

  const showTask = () => {
    navigate(`/tasks/${task.id}`);
  };

  return (
    <div onClick={showTask} style={{ backgroundColor: "#101010" }}>
      {/* Contenido */}
      <h3>{task.title}</h3>
      <p className="">{task.title}</p>
    </div>
  );
};
