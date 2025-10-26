import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Student CRUD
export const getStudents = () => API.get("/students");
export const createStudent = (data) => API.post("/students", data);
export const updateStudent = (id, data) => API.put(`/students/${id}`, data);
export const deleteStudent = (id) => API.delete(`/students/${id}`);
