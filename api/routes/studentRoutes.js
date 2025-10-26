import express from "express";
import {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";

const router = express.Router();

// CRUD routes
router.get("/", getStudents);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;
