import { createTask, deleteTask } from "@/api/task.api";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export const TaskFormPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    await createTask(data);
    navigate("/tasks");
  });

  const onDelete = async () => {
    const confirm = window.confirm("¿Seguro que deseas eliminarlo?");
    if (confirm) {
      await deleteTask(params.id);
      navigate("/tasks");
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          {...register("title", { required: true })}
          type="text"
          id="title"
          name="title"
          placeholder="Escribe un título"
          className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
        />
        {errors.title && <span>Este campo es requerido</span>}

        <textarea
          {...register("description", { required: true })}
          id="description"
          name="description"
          placeholder="Escribe una descripción"
          className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none resize-none min-h-[150px]"
        />
        {errors.description && <span>Este campo es requerido</span>}

        <input type="submit" value="Crear tarea" />
      </form>

      {params.id && (
        <button
          onClick={onDelete}
          className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
        >
          Eliminar tarea
        </button>
      )}
    </div>
  );
};
