import { createTask, deleteTask, getTask, updateTask } from "@/api/task.api";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export const TaskFormPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    const x_action = !params.id
      ? createTask(data)
      : updateTask(params.id, data);
    await x_action;
    toast.success(txtMessage(), {
      position: "bottom-right",
      style: { backgroundColor: "#101010", color: "white" },
    });
    navigate("/tasks");
  });

  const onDelete = async () => {
    const confirm = window.confirm("¿Seguro que deseas eliminarlo?");
    if (confirm) {
      await deleteTask(params.id);
      toast.success("Tarea eliminada", {
        position: "bottom-right",
        style: { backgroundColor: "#101010", color: "white" },
      });
      navigate("/tasks");
    }
  };

  const txtMessage = () => (params?.id ? "Tarea actualizada" : "Tarea creada");
  const btnText = () => (params?.id ? "Actualizar tarea" : "Crear tarea");

  useEffect(() => {
    setValue("title");
    setValue("description");

    if (params.id) {
      const getTaskForById = async () => {
        const {
          data: { title, description },
        } = await getTask(params.id);
        setValue("title", title);
        setValue("description", description);
      };
      getTaskForById();
      console.log("Obteniendo datos");
    }
  }, [params.id, setValue]);

  return (
    <div class="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          {...register("title", { required: true })}
          type="text"
          id="title"
          name="title"
          placeholder="Escribe un título"
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.title && <span>Este campo es requerido</span>}

        <textarea
          {...register("description", { required: true })}
          id="description"
          name="description"
          placeholder="Escribe una descripción"
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.description && <span>Este campo es requerido</span>}

        <input
          type="submit"
          value={btnText()}
          className="bg-indigo-500 p-3 rounded-lg block w-full mt-3 cursor-pointer"
        />
      </form>

      {params.id && (
        <div className="flex justify-end">
          <button
            onClick={onDelete}
            className="bg-red-500 p-3 rounded-lg block w-48 mt-3 cursor-pointer"
          >
            Eliminar tarea
          </button>
        </div>
      )}
    </div>
  );
};
