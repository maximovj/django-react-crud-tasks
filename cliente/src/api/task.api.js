import axios from "axios";

const tasksApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/tasks",
});

export const getAllTaks = () => tasksApi.get("/");

export const createTask = (task) => tasksApi.post("/", task);

export const deleteTask = (id) => tasksApi.delete(`/${id}/`);
